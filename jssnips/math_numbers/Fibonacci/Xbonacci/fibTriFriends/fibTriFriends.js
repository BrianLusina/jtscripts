/*
Make a copy of the signature array
use a conditional to check if the length of the array is a certain number
if 1 or 0, return the original signature input
if 2, sum, like usual fibonacci sequence
else, use the copy to sum the previous elements to get the next
push the next element to the original array.
reasign a new copy of the signature array
store the first variable of the copy
check if the signature is equal to the desired length and stop the loop if so, else continue
*/
function Xbonacci(signature, n) {
	var next = 0,
		sigCopy = signature.slice(),
		first;
	if (signature.length === 1 || 0) {
		return signature;
	}

	if (signature.length === 2) {
		for (var x = 0; x < signature.length; x++) {
			next = signature[x] + signature[x + 1];
			signature.push(next);
			if (signature.length === n) {
				break;
			}
		}
		return signature;
	}

	for (var x = 0; x < signature.length; x++) {
		next = sigCopy.reduce(function (a, b) {
			return a + b;
		});
		signature.push(next);
		sigCopy = signature.slice();
		first = sigCopy.shift();
		if (signature.length === n) {
			break;
		}
	}
	return signature;
}

module.exports = Xbonacci;
