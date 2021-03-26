function diffArray(arr1, arr2) {
	var newArr = [];
	for (var x = 0; x < arr1.length; x++) {
		if (arr2.indexOf(arr1[x]) === -1) {
			newArr.push(arr1[x]);
		}
	}

	for (var i = 0; i < arr2.length; i++) {
		if (arr1.indexOf(arr2[i]) === -1) {
			newArr.push(arr2[i]);
		}
	}
	return newArr;
}
