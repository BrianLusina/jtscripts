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
