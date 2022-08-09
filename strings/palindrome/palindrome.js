const Palindrome = function () {};

Palindrome.prototype.isPalindrome = function (str) {
  var str = String(str);
  // punctuation marks
  const re = /[\.,-\/#!$%\^&\*;:{}=\-_`~()@\+\?><\[\]\+]/gi;
  // turn strings to lower case and removes puncuation
  const iniStr = str.toLowerCase().replace(re, '');
  const finalStr = iniStr.replace(/\s+/g, '');
  if (finalStr.split('').reverse().join('') === finalStr) {
    return true;
  } else {
    return false;
  }
};

module.exports = Palindrome;
