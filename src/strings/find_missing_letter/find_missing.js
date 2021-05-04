function fearNotLetter(str) {
	var arr = [];
	for (var x = 0; x < str.length; x++) {
		arr.push(str.charCodeAt(x));
	}
	for (var i = 0; i < arr.length; i++) {
		if ((arr[i + 1] - arr[i]) > 1) {
			str = String.fromCharCode(arr[i] + 1);
			break;
		} else {
			str = undefined;
		}
	}
	return str;
}

