# Graphene library co wrapper

# Prerequisite

Set up an wallet with ws connection enabled
```
./cli_wallet -w wallet -s wss://bitshares.openledger.info:443/ws/ -r 127.0.0.1:8099
```
url in this example is: ws://127.0.0.1:8099

Usage example
------------
```js
var graphene  = require('graphene-co'),
co = require('co');

co(function*(){
  var client = yield graphene.wallet.createWalletClient("ws://127.0.0.1:8099");
  console.log(client);
  var info = yield client.info();
  console.log(info);
  yield client.close();
}).then(function(){
},function(err){
});
```

Generic commands
----------

* Usage:
```
node bin/cmd.js url cmd *args
```

* Example:
```
node bin/cmd.js ws://127.0.0.1:8099 info
```
