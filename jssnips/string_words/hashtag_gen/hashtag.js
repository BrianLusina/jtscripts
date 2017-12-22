var HashTag = function () {};

HashTag.prototype.generateHashtag = function (str) {
	var out = '';
	if (str === '') {
		return false;
	} else {
		var words = str.split(' ');
		for (var x = 0; x < words.length; x++) {
    	out += words[x].charAt(0).toUpperCase() + words[x].substring(1);
		}
	}
	return (out.length > 140) ? false : '#' + out;
};

module.exports = HashTag;
