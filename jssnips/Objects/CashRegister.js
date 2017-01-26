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
* */
function checkCashRegister(price, cash, cid) {
  // Total Amount to return to client
	var totalChange = Number((cash - price).toFixed(2));

  // Standard currency Value
	var stdCurr = [0.01, 0.05, 0.10, 0.25, 1, 5, 10, 20, 100];

  // Name of current currency
	var currType;

  // How many of the current standard currency
	var stdCurrAmount;
	var currCurrency;

  // Change to be returned in proper format.
	var changeArr = [];

	var totalCash = Number(cid.map(function (money) {
    // Gets 1D array of values
		return money[1];
	}).reduce(function (cash1, cash2) {
    // Reduces the values to one number
		return cash1 + cash2;

    // Rounds to two decimal places
	}).toFixed(2));

  // Handle the case where we don't have enough money or will be left without money.
	if (totalChange > totalCash) {
		return 'Insufficient Funds';
	} else if (totalChange === totalCash) {
		return 'Closed';
	}

  // Loops array from right to left.
	for (var i = Number(cid.length) - 1; i >= 0; i--) {
    // Gets the monetary value of the current array and the type.
		currCurrency = Number(cid[i][1].toFixed(2));
		currType = cid[i][0];

    // If the currency is less than the change left to hand then get the right amount from the current type of change.
		if (Number(stdCurr[i].toFixed(2)) <= Number(totalChange.toFixed(2))) {
			stdCurrAmount = Math.floor(currCurrency / stdCurr[i]);

			if ((stdCurr[i] * stdCurrAmount) >= totalChange) {
				stdCurrAmount = Math.floor(totalChange / stdCurr[i]);
			}

      // Get the current currency to use and udate the amount left to hand out.
			currCurrency = Number((stdCurr[i] * stdCurrAmount).toFixed(2));
			totalChange = Number((totalChange - currCurrency).toFixed(2));

      // Update the values so we always have the current amount left in the register.
			cid[i][1] = currCurrency;

      // Push the change right change to hand out
			changeArr.push([currType, currCurrency]);
		}
	}

	return changeArr;
}

/* ALternatively

// Create an object which hold the denominations and their values
var denom = [
  { name: 'ONE HUNDRED', val: 100.00},
  { name: 'TWENTY', val: 20.00},
  { name: 'TEN', val: 10.00},
  { name: 'FIVE', val: 5.00},
  { name: 'ONE', val: 1.00},
  { name: 'QUARTER', val: 0.25},
  { name: 'DIME', val: 0.10},
  { name: 'NICKEL', val: 0.05},
  { name: 'PENNY', val: 0.01}
];

function checkCashRegister(price, cash, cid) {
  var change = cash - price;

  // Transform CID array into drawer object
  var register = cid.reduce(function(acc, curr) {
    acc.total += curr[1];
    acc[curr[0]] = curr[1];
    return acc;
  }, {total: 0});

  // Handle exact change
  if (register.total === change) {
    return 'Closed';
  }

  // Handle obvious insufficent funds
  if (register.total < change) {
    return 'Insufficient Funds';
  }

  // Loop through the denomination array
  var change_arr = denom.reduce(function(acc, curr) {
    var value = 0;
    // While there is still money of this type in the drawer
    // And while the denomination is larger than the change reminaing
    while (register[curr.name] > 0 && change >= curr.val) {
      change -= curr.val;
      register[curr.name] -= curr.val;
      value += curr.val;

      // Round change to the nearest hundreth deals with precision errors
      change = Math.round(change * 100) / 100;
    }
    // Add this denomination to the output only if any was used.
    if (value > 0) {
        acc.push([ curr.name, value ]);
    }
    return acc; // Return the current Change Array
  }, []); // Initial value of empty array for reduce

  // If there are no elements in change_arr or we have leftover change, return
  // the string "Insufficient Funds"
  if (change_arr.length < 1 || change > 0) {
    return "Insufficient Funds";
  }

  // Here is your change, ma'am.
  return change_arr;
}
*/

checkCashRegister(19.50, 20.00, [['PENNY', 1.01], ['NICKEL', 2.05], ['DIME', 3.10], ['QUARTER', 4.25], ['ONE', 90.00], ['FIVE', 55.00], ['TEN', 20.00], ['TWENTY', 60.00], ['ONE HUNDRED', 100.00]]);

console.log(checkCashRegister(19.50, 20.00, [['PENNY', 1.01], ['NICKEL', 2.05], ['DIME', 3.10], ['QUARTER', 4.25], ['ONE', 90.00], ['FIVE', 55.00], ['TEN', 20.00], ['TWENTY', 60.00], ['ONE HUNDRED', 100.00]]));

console.log(checkCashRegister(19.50, 20.00, [['PENNY', 1.01], ['NICKEL', 2.05], ['DIME', 3.10], ['QUARTER', 4.25], ['ONE', 90.00], ['FIVE', 55.00], ['TEN', 20.00], ['TWENTY', 60.00], ['ONE HUNDRED', 100.00]])); // should return an array.
console.log(checkCashRegister(19.50, 20.00, [['PENNY', 0.01], ['NICKEL', 0], ['DIME', 0], ['QUARTER', 0], ['ONE', 0], ['FIVE', 0], ['TEN', 0], ['TWENTY', 0], ['ONE HUNDRED', 0]])); // should return a string.

console.log(checkCashRegister(19.50, 20.00, [['PENNY', 0.50], ['NICKEL', 0], ['DIME', 0], ['QUARTER', 0], ['ONE', 0], ['FIVE', 0], ['TEN', 0], ['TWENTY', 0], ['ONE HUNDRED', 0]])); // should return a string.

console.log(checkCashRegister(19.50, 20.00, [['PENNY', 1.01], ['NICKEL', 2.05], ['DIME', 3.10], ['QUARTER', 4.25], ['ONE', 90.00], ['FIVE', 55.00], ['TEN', 20.00], ['TWENTY', 60.00], ['ONE HUNDRED', 100.00]])); // should return [["QUARTER", 0.50]].

console.log(checkCashRegister(3.26, 100.00, [['PENNY', 1.01], ['NICKEL', 2.05], ['DIME', 3.10], ['QUARTER', 4.25], ['ONE', 90.00], ['FIVE', 55.00], ['TEN', 20.00], ['TWENTY', 60.00], ['ONE HUNDRED', 100.00]]));// should return [["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15.00], ["ONE", 1.00], ["QUARTER", 0.50], ["DIME", 0.20], ["PENNY", 0.04]].

console.log(checkCashRegister(19.50, 20.00, [['PENNY', 0.01], ['NICKEL', 0], ['DIME', 0], ['QUARTER', 0], ['ONE', 0], ['FIVE', 0], ['TEN', 0], ['TWENTY', 0], ['ONE HUNDRED', 0]]));// should return "Insufficient Funds".

console.log(checkCashRegister(19.50, 20.00, [['PENNY', 0.01], ['NICKEL', 0], ['DIME', 0], ['QUARTER', 0], ['ONE', 1.00], ['FIVE', 0], ['TEN', 0], ['TWENTY', 0], ['ONE HUNDRED', 0]]));// should return "Insufficient Funds".

console.log(checkCashRegister(19.50, 20.00, [['PENNY', 0.50], ['NICKEL', 0], ['DIME', 0], ['QUARTER', 0], ['ONE', 0], ['FIVE', 0], ['TEN', 0], ['TWENTY', 0], ['ONE HUNDRED', 0]])); // should return "Closed".
