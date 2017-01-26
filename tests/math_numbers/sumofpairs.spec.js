var sum_pairs = require('../../jssnips/math_numbers/SumOfPairs/sumofpairs.js');

l1 = [1, 4, 8, 7, 3, 15];
l2 = [1, -2, 3, 0, -6, 1];
l3 = [20, -13, 40];
l4 = [1, 2, 3, 4, 1, 0];
l5 = [10, 5, 2, 3, 7, 5];
l6 = [4, -2, 3, 3, 4];
l7 = [0, 2, 0];
l8 = [5, 9, 13, -3];

describe('Testing For Sum of Pairs', function () {
	it('Basic: [' + l1 + '] should return [1, 7] for sum = 8', function () {
		expect(sum_pairs(l1, 8)).toEqual([1, 7]);
	});

	xit('Negatives: [' + l2 + '] should return [0, -6] for sum = -6', function () {
		expect(sum_pairs(l2, -6)).toEqual([0, -6]);
	});

	xit('No Match: [' + l3 + '] should return undefined for sum = -7', function () {
		expect(sum_pairs(l3, -7)).toEqual(undefined);
	});

	xit('First Match From Left: [' + l4 + '] should return [1, 1] for sum = 2 ', function () {
		expect(sum_pairs(l4, 2)).toEqual([1, 1]);
	});

	xit('First Match From Left REDUX!: [' + l5 + '] should return [3, 7] for sum = 10 ', function () {
		expect(sum_pairs(l5, 10)).toEqual([3, 7]);
	});

	xit('Duplicates: [' + l6 + '] should return [4, 4] for sum = 8', function () {
		expect(sum_pairs(l6, 8)).toEqual([4, 4]);
	});

	xit('Zeroes: [' + l7 + '] should return [0, 0] for sum = 0', function () {
		expect(sum_pairs(l7, 0)).toEqual([0, 0]);
	});

	xit('Subtraction: [' + l8 + '] should return [13, -3] for sum = 10', function () {
		expect(sum_pairs(l8, 10)).toEqual([13, -3]);
	});
});

