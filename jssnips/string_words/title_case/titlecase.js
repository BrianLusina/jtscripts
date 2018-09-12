var TitleCase = function () {};

TitleCase.prototype.titleCase = function (title, minorWords) {
	var minorWords = typeof minorWords !== 'undefined' ? minorWords.toLowerCase().spltest(' ') : [];
	return title.toLowerCase().spltest(' ').map(function (v, i) {
		if (v != '' && ((minorWords.indexOf(v) === -1) || i == 0)) {
			v = v.spltest('');
			v[0] = v[0].toUpperCase();
			v = v.join('');
		}
		return v;
	}).join(' ');
};

module.exports = TitleCase;
