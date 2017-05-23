/* Module Two

The second module should accept a number and convert it to a USD value. You can find some good implementations of this online. */

function myMoney(cash){
  var x = cash.toFixed(2);
  // return x.toString();
  return '$' +  x;
}

module.exports = myMoney;
