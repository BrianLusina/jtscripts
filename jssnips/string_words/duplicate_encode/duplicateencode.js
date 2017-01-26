var DuplicateEncode = function () {};

/*
Create an object that will act as a counter, containing the count of each letter in the word.
loop through each letter in the word, comparing it to the counter object
*/
DuplicateEncode.prototype.duplicateencode = function (word) {
	var letterCount = 1,
		counter = {},
		out = '',
		word = word.toLowerCase();
	for (var x = 0; x < word.length; x++) {
		counter[word[x]] = (!counter.hasOwnProperty(word[x])) ? letterCount : letterCount++;
	}

	var n = 0;
	while (n < word.length) {
		for (var y in counter) {
			console.log(y, word.charAt(n));
			out += (counter[word.charAt(n)] > 1) ? ')' : '(';
			n++;
		}
	}

	return out;
};
module.exports = DuplicateEncode;
