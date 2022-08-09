// min/max number in an array
const numbers = [5, 6, 2, 3, 7];

// using Math.min/Math.max apply
let max = Math.max.apply(null, numbers);
// This about equal to Math.max(numbers[0], ...)
// or Math.max(5, 6, ...)
console.log('From max', max, numbers);

let min = Math.min.apply(null, numbers);
console.log('From apply', min, numbers);

// vs. simple loop based algorithm
(max = -Infinity), (min = Number(Infinity));

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
  if (numbers[i] < min) {
    min = numbers[i];
  }
}
console.log('From simple loop based algorithm', 'Max=', max, 'Min=', min, numbers);
