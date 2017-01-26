function array_diff(a, b) {
	var res = [];
	for (var x = 0; x < a.length; x++) {
		for (var i = 0; i < b.length; i++) {
			if (a[x] !== b[i]) {
				res.push(a[x]);
			}
		}
	}
	return res;
}
