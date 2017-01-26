function coinToss(n) {
    // check if the parameter is valid
	if (!(n instanceof Number)) {
		throw `Invalid parameter $n`;
	}

    // counter variable to represent each toss
    // this will be incremented after each toss as long as it is less that n
	var tossCount = 0;

    // create initial counter variables for each side of the coin
	var headCount = 0,
		tailCount = 0;

    // generate a function to randomly pick between heads and tails.
    // any number below 5 will be heads
    // any number greater than 5 is a tails
	while (tossCount < n) {
		let randomNum = Math.floor(Math.random() * 10) + 1;
		if (randomNum <= 5) {
			headCount += 1;
		} else {
			tailCount += 1;
		}
		tossCount += 1;
	}

	return headCount;
}

module.exports = coinToss;
