var _ = require('underscore');

exports.func = function(func,wrapData){
  return function(){
    var args = Array.prototype.slice.call(arguments);
    return new Promise(function(resolve,reject){
      args.push(function(err,data){
        if(err) return reject(err);
        if(wrapData){
          _.each(_.keys(data),function(k){
            data[k] = exports.func(data[k],false);
          });
        }
        resolve(data);
      });
      func.apply(this,args);
    });
  };
};

exports.mod = function(module){
  _.each(_.keys(module),function(k){
    module[k] = exports.func(module[k],true);
  });
  return module;
};
