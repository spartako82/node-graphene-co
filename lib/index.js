var graphene = require('graphene');
var wrap = require('./wrap');
var _ = require('underscore');
var co = require('co');

exports.client = graphene.client;
exports.witness = wrap.mod(graphene.witness);
exports.wallet = wrap.mod(graphene.wallet);


// co(function*(){
//   var client = yield graphene.witness.createWitnessClient("ws://127.0.0.1:8099");
//   console.log(client);
//   var i = yield client.get_block(1);
//   console.log(i);
//   yield client.close();
// }).then(function(){
//   console.log("done");
// });

// co(function*(){
//   var client = yield graphene.wallet.createWalletClient("ws://127.0.0.1:8099");
//   console.log(client);
//   var i = yield client.info();
//   console.log(i);
//   yield client.close();
// }).then(function(){
//   console.log("done");
// });

// console.log(f);
// var p = f("ws://127.0.0.1:8099");
// console.log(p);
// p.then(function(r){
//   console.log("r",r);
// },function(err){
//   console.log("err",err);
// });
