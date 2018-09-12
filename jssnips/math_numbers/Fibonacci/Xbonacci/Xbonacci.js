/** Sum All odd Fibonacci numbers below passed number */
function sumFibs(num) {
	if (num < 2) {
  	return num;
	}
	var fib = [];
	fib[0] = 0;
	fib[1] = 1;
	for (var x = 2; x <= num; x++) {
		fib[x] = fib[x - 1] + fib[x - 2];
		if (fib[x] > num)    	{
			break;
		}
	}
	console.log('Fibonacci Seq: ' + fib);
	var odds = fib.filter(function (i) {
  	if (i <= num) {
		return i % 2 !== 0;
	}
	});
	console.log('Odds: ' + odds);
	return odds.reduce(function (x, y) {
		return x + y;
	});
}

console.log(sumFibs(1));// should return a number.
console.log(sumFibs(1000));// should return 1785.
console.log(sumFibs(4000000));// should return 4613732.
console.log(sumFibs(4));// should return 5.
console.log(sumFibs(10));// should return 10
console.log(sumFibs(20));// should return 23
console.log(sumFibs(75024));// should return 60696.
console.log(sumFibs(75025)); // should return 135721.
console.log('------------------------------------');
/*
Well, time to expand the family a little more: think of a Quadribonacci starting with a signature of 4 elements and each following element is the sum of the 4 previous, a Pentabonacci (well Cinquebonacci would probably sound a bit more italian, but it would also sound really awful) with a signature of 5 elements and each following element is the sum of the 5 previous, and so on.

Well, guess what? You have to build a Xbonacci function that takes a signature of X elements - and remember each next element is the sum of the last X elements - and returns the first n elements of the so seeded sequence.

Xbonacci([1,1,1,1],10)==[1,1,1,1,4,7,13,25,49,94]
Xbonacci([0,0,0,0,1],10)==[0,0,0,0,1,1,2,4,8,16]
Xbonacci([1,0,0,0,0,0,1],10)==[1,0,0,0,0,0,1,1,2,4]
*/

function Xbonacci(signature, n) {
	var next = 0,
		count = 0,
		sigCopy = signature.slice(),
		first;
	switch (signature.length) {
		case 0:
		case 1:
			return signature;

		case 2:
			for (var x = 0; x < signature.length; x++) {
				next = signature[x] + signature[x + 1];
				signature.push(next);
				if (signature.length === n) {
					break;
				}
			}
			return signature;

		default:
			while (count <= n) {
                // console.log("Signature Copy " + sigCopy + " Signature: " + signature);
				next = sigCopy.reduce(function (a, b) {
					return a + b;
				});
				signature.push(next);
				count++;
                // copy the new array and remove the first element
				sigCopy = signature.slice();
				first = sigCopy.shift();
				if (signature.length === n) {
					break;
				}
			}
			return signature;
	}
}
console.log(Xbonacci([0.5, 0, 0, 0, 0, 0], 11) + ' Expected ' + [0.5, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
console.log(Xbonacci([0, 0, 0, 0, 1], 10) + ' Exptected ' + [0, 0, 0, 0, 1, 1, 2, 4, 8, 16]);
console.log(Xbonacci([0, 1], 10) + ' Exptected ' + [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
console.log(Xbonacci([0, 1], 10) + ' Exptected ' + [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
console.log(Xbonacci([1, 1], 10) + ' Exptected ' + [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
console.log(Xbonacci([0, 0, 0, 0, 1], 10) + ' Exptected ' + [0, 0, 0, 0, 1, 1, 2, 4, 8, 16]);
console.log(Xbonacci([1, 0, 0, 0, 0, 0, 1], 10) + ' Exptected ' + [1, 0, 0, 0, 0, 0, 1, 2, 3, 6]);
console.log('====================');
/*
As you probably know, Fibonacci sequence are the numbers in the following integer sequence: 1, 1, 2, 3, 5, 8, 13... Write a method that takes the index as an argument and returns last digit from fibonacci number. Example: getLastDigtest(15) - 610. Your method must return 0 because the last digit of 610 is 0. Fibonacci sequence grows very fast and value can take very big numbers (bigger than integer type can contain), so, please, be careful with overflow.
*/
function getLastDigtest(index) {
	var fib = [1, 1];
	for (var x = 2; x < index + 1; x++) {
		fib[x] = fib[x - 1] + fib[x - 2];
		if (x >= index) {
			break;
		}
	}
	console.log('Fibonacci Sequence ' + fib + ' with length ' + fib.length);
	return String(fib[index]).substr(-1);
}
console.log('Testing for getLastDigtest(index)');
console.log(getLastDigtest(20));// 6
console.log(getLastDigtest(30));// 9
console.log(getLastDigtest(300));// 0
console.log(getLastDigtest(20001)); // 6
console.log(getLastDigtest(193150));// 5

/* console.log(getLastDigtest(193150));//5
console.log(getLastDigtest(20001)); //6 */
