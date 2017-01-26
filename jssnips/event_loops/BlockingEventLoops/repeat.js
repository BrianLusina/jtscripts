function repeat(operation, num, callback) {
	setTimeout(function () {
		if (num <= 0) {
			return callback();
		}
		operation();
		return repeat(operation, --num, callback);
	}, 0);
}

// altenative solution
function repeat_2(operation, num) {
	if (num <= 0) {
		return;
	}
	operation();

    // release operation every 10 iterations
	if (num % 10 === 0) {
		setTimeout(function () {
			repeat_2(operation, --num);
		});
	} else {
		repeat_2(operation, --num);
	}
}

module.exports = repeat;
