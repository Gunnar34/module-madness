var http = require('http');
// var randNum = require('./module-one');
// var money = require('./module-two');
var acct = require('./module-three');


http.createServer(function(req, res){
  // var max = 10000;
  // var min = 100;
  // res.write(randNum(min, max));
  // res.write(money(1234213));
  res.write(acct.accountString());
    res.write(acct.accountBal());
  res.end();


}).listen(3000);
