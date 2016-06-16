/**
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. Return the string "Closed" if cash-in-drawer is equal to the change due.

Otherwise, return change in coin and bills, sorted in highest to lowest order.

1 Penny == 1 cent = 0.01
1 Nickel == 5 cents = 0.05
1 Dime == 10 cents = 0.10
1 Quarter == 25 cents = 0.25

 Example cash-in-drawer array:
   [
    ["PENNY", 1.01],  //1.01/0.01 = 101 pennies
    ["NICKEL", 2.05], //2.05/.05 = 41 nickels
    ["DIME", 3.10],   //3.10/0.1 = 31 dimes
    ["QUARTER", 4.25],//4.25/0.25 = 17 quarters
    ["ONE", 90.00],   //90/1 = 90 ones
    ["FIVE", 55.00],  //55/5 = 11 fives
    ["TEN", 20.00],   //20/10 = 2 tens
    ["TWENTY", 60.00],//3 twenties
    ["ONE HUNDRED", 100.00] //1 hundred
  ]
*/


/**
alternative to determining the cid amount
var cidAmt = cid.reduce(function(a,b){
							return a.concat(b).filter(function(val){
									return typeof val !== "string";
									});
						}).reduce(function(x,y){return x+y});
*/

/**
var cid = [["PENNY", 1.01],["NICKEL", 2.05],["DIME", 3.10], ["QUARTER", 4.25],["ONE", 90.00],["FIVE", 55.00], ["TEN", 20.00],["TWENTY", 60.00],["ONE HUNDRED", 100.00]]
var cidAmt = 0 ,reversed = Array.prototype.slice.call(cid.reverse()) ,res = [];
var change = 96.74;
//calc amount in cid
for(var x =0;x<cid.length;x++){
	for(var i = 1;i<cid[x].length;i++){
  		cidAmt += cid[x][i];
  }
}
console.log("Total in Cash Register:" + cidAmt);
//loop through each currency amount
for(var i = 0;i<reversed.length;i++){
	for(var y = 1; y<reversed[i].length; y++){
  	if(change>reversed[i][y]){
    	change -= reversed[i][y];
      res.push(reversed[i]);

    }
  }
}
console.log("Result: " + res);
**/
function checkCashRegister(price, cash, cid) {
  var change = cash - price;
  var cidAmt = 0;
  //determine the cid amount
  for(var x =0;x<cid.length;x++){
	for(var i = 1;i<cid[x].length;i++){
  		cidAmt += cid[x][i];
    }
  }

  if(cidAmt < change){
    return "Insufficient Funds";
  }else if(cidAmt === change){
    return "Closed";
  }else{

  }
  return change;
}

console.log(checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]));

console.log(checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]])); //should return an array.
console.log(checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])); //should return a string.

console.log(checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])); //should return a string.

console.log(checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]])); //should return [["QUARTER", 0.50]].

console.log(checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]));// should return [["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15.00], ["ONE", 1.00], ["QUARTER", 0.50], ["DIME", 0.20], ["PENNY", 0.04]].

console.log(checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));// should return "Insufficient Funds".

console.log(checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));// should return "Insufficient Funds".

console.log(checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])); // should return "Closed".
