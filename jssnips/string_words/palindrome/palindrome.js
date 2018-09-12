var Palindrome = function () {};

Palindrome.prototype.isPalindrome = function (str) {
	var str = String(str);
  // punctuation marks
	var re = /[\.,-\/#!$%\^&\*;:{}=\-_`~()@\+\?><\[\]\+]/gi;
  // turn strings to lower case and removes puncuation
	var iniStr = str.toLowerCase().replace(re, '');
	var finalStr = iniStr.replace(/\s+/g, '');
	if (finalStr.spltest('').reverse().join('') == finalStr) {
		return true;
	} else {
		return false;
	}
};

module.exports = Palindrome;
