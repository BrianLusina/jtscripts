SCORES = {
	1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
	2: ['D', 'G'],
	3: ['B', 'C', 'M', 'P'],
	4: ['F', 'H', 'V', 'W', 'Y'],
	5: ['K'],
	8: ['J', 'X'],
	10: ['Q', 'Z']
};

function score(word) {
	var counter = 0;

	if (word == null) {
		return counter;
	}
	var word = word.toUpperCase();

	for (w in word) {
		for (var key in SCORES) {
			if (SCORES[key].includes(word[w])) {
				counter += Number(key);
			}
		}
	}
	return counter;
}

module.exports = score;
