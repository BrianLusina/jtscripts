/**
Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.
*/
function sorter(a, b) {
	if (a[1] > b[1]) {
		return 1;
	}	else {
		return -1;
	}
}

function updateInventory(invArr, newInvArr) {
	// sort the arrays
	var currentInv = invArr.sort(sorter),
		updatedInv = newInvArr.sort(sorter);
	var namesArr = [];

  /* if inventory is empty, return the current inventory, else if the current inv is empty
  / return the inventory array, else update the current inv from the new inventory */
	if (newInvArr.length === 0) {
		return currentInv;
	}	else if (invArr.length === 0) {
		return updatedInv;
	}	else {
    // loop through inventory array, checking if there are items from updatedInv
		for (var i = 0; i < updatedInv.length; i++) {
			for (var x = 0; x < currentInv.length; x++) {
				if (currentInv[x][1] === updatedInv[i][1]) {
          	currentInv[x][0] += updatedInv[i][0];
				}
			}
		}
	}

	for (var j = 0; j < currentInv.length; j++) {
     		namesArr.push(currentInv[j][1]);
	}
	for (var n = 0; n < namesArr.length; n++) {
     		if (namesArr.indexOf(updatedInv[n][1]) === -1) {
        		currentInv.push(updatedInv[n]);
		}
	}
	return currentInv.sort(sorter);
}

// Example inventory lists
var curInv = [
    [21, 'Bowling Ball'],
    [2, 'Dirty Sock'],
    [1, 'Hair Pin'],
    [5, 'Microphone']
];

var newInv = [
    [2, 'Hair Pin'],
    [3, 'Half-Eaten Apple'],
    [67, 'Bowling Ball'],
    [7, 'Toothpaste']
];

updateInventory(curInv, newInv);
