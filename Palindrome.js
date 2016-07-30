/**
Longest Palindrome

Find the length of the longest substring in the given string s that is the same in reverse.

As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.

If the length of the input string is 0, return value must be 0.

Example:

"a" -> 1
"aab" -> 2
"abcde" -> 1
"zzbaabcd" -> 4
"" -> 0
**/
var longestPalindrome=function(s){
    s = s.toLowerCase(), finalStr = "";
    var arrIterator = s.split("").entries();
    var isPalindrome = function(v){
      return v === v.split("").reverse(); //check if palindrome
    }
    if(s === ""){
      return 0;
    }else{
      for(let y of arrIterator){
        for(let x of arrIterator){
          testStr = s.slice(y,x + 1);
          if(isPalindrome(testStr) && testStr.length > lenfinalStr.length){
              finalStr = testStr;
            }
        }
      }
    }
return finalStr.length;
}
console.log(longestPalindrome("baablkj12345432133d"));
