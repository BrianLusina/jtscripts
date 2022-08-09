const Pattern = function () {};

/*
Perform checks to determine whether number is less than 1, or is 1, if so return an empty string or string literal of one respectively.
else, create a range of the numbers from 1 upto the number itself, converting each to a String
perform a for loop on the range of numbers, repeating each string literal the number of times and adding it to an array. join the array with \n new line and return the output
*/
Pattern.prototype.getPattern = function (n) {
  let output = '';
  const range = [];
  const res = [];
  if (n < 1) {
    output = '';
  }
  if (n === 1) {
    output = '1';
  } else {
    for (let i = 1; i <= n; i++) {
      range.push(String(i));
    }

    for (let x = 0; x < range.length; x++) {
      const num = range[x];
      res.push(num.repeat(parseInt(num)));
    }
    output = res.join('\n');
  }
  return output;
};

module.exports = Pattern;
