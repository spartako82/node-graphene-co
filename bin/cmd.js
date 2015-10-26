var _ = require('underscore'),
utils = require('./utils'),
async = require('async'),
argv = require('yargs').argv,
co = require('co'),
lib  = require('../lib/');

var die = function() {
  console.log("bin/cmd");
  console.log("");
  console.log("USAGE: bin/cmd.js url cmd *args");
  process.exit(1);
}

if(argv._.length < 1){
  die();
  return;
}

var main = function*(){
  var url = argv._[0];
  var cmd = argv._[1];
  var args = utils.parseArgs(argv._.slice(2));

  //args[2] = JSON.parse(args[2]);
  console.log(args);

  var client = yield lib.wallet.createWalletClient(url);
  var r = yield client[cmd].apply(this,args);
  console.log(r);
  console.log(JSON.stringify(r));
  yield client.close();
};

co(function*(){
  yield main();
}).then(function(){
},function(err){
  console.log(err);
});
