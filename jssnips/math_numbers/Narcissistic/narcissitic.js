function narcissistic(value) {
	var l = String(value).length;
	var res = 0;
	for (var x = 0; x < l; x++) {
		res += Math.pow(parseInt(String(value)[x]), l);
	}
	return res === value;
}
