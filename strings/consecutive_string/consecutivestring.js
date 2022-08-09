const ConsecutiveString = function () {};

/* validate k and length of the array. If the array length is 0 of less than k of k is less thatn or equal to 0
return an empty string.
if k is 1, then return the longest string.
else, loop through the string, */
ConsecutiveString.prototype.longestConsec = function (starr, k) {
  if (starr.length === 0 || k > starr.length || k < 1) {
    return '';
  }
  const lens = starr.map((_, i, arr) => arr.slice(i, i + k).join('').length);
  const i = lens.indexOf(Math.max(...lens));
  return starr.slice(i, i + k).join('');
};

module.exports = ConsecutiveString;
