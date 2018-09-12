module.exports.at = function (h, m) {
	'use strict';
	m = m || 0;
	function t(a) {
		var x = (y, z) => ('0' + (y - z * Math.floor(y / z))).slice(-2);
		m += a || 0;
		h += Math.floor(m / 60);
		return x(h, 24) + ':' + x(m, 60);
	}
	return {
		toString: t,
		plus: n => t(n),
		minus: n => t(-n),
		equals: n => t() === n.toString()
	};
};
