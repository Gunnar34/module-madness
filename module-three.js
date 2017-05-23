/* Module Three

The third module should require the other two modules (i.e. Module One and Module Two). It should have two function exports:

The first function export should return the result of the first module being passed into the second module.
The second function export should return the text “Account balance: \n”.*/


var random = require('./module-one');
var money = require('./module-two');

exports.accountBal = function(){
  var max = 10000;
  var min = 100;
  // var result = random.randNum(min, max);
  // var $result = money.myMoney(result);
  // return $result.toString();
  var result = money(random(max, min));
  return result.toString();
};
exports.accountString = function(){
    return 'Account balance: ';
};
