import {isAlphaNumeric} from '../../utils/stringUtils';

export function isPalindromeWithRegex(s: string) {
  // punctuation marks
  const re = /[\.,-\/#!$%\^&\*;:{}=\-_`~()@\+\?><\[\]\+]/gi;
  // turn strings to lower case and removes puncuation
  const iniStr = s.toLowerCase().replace(re, '');
  const finalStr = iniStr.replace(/\s+/g, '');
  if (finalStr.split('').reverse().join('') === finalStr) {
    return true;
  } else {
    return false;
  }
};

export function isPalindrome(s: string) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    while (left < right && !isAlphaNumeric(s[left])) {
      left++;
    }

    while (left < right && !isAlphaNumeric(s[right])) {
      right++;
    }

    if (s[left].toLowerCase() != s[right].toLowerCase()) {
      return false;
    }

    left++;
    right--;
  }

  return true;
};
