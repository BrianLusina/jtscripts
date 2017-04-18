var ArrayShift = function () {};

ArrayShift.prototype.addingShifted = function (arrayOfArrays, shift) {
	var result = [],
		endArrayLength = arrayOfArrays[0].length + shift * (arrayOfArrays.length - 1);
	for (var i = 0; i < endArrayLength; i++) {
		result.push(0);
	}
	for (var x = 0; x < arrayOfArrays.length; x++) {
		for (var j = 0; j < arrayOfArrays[x].length; j++) {
			result[j + shift * x] += arrayOfArrays[x][j];
		}
	}
	return result;
};

module.exports = ArrayShift;
