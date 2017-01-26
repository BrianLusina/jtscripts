function pattern(n) {
	var output = '',
		range = [],
		res = [];
	if (n === 1) {
		output = '1';
	} else {
		for (var i = 1; i <= n; i++) {
			range.push(String(i));
		}
		range.reverse();
		for (var x = 0; x < n; x++) {
			res.push(range.join(''));
			var last = range.pop();
		}
		output = res.join('\n');
	}
	return output;
}
