var ConsecutiveString = function(){};

/*validate k and length of the array. If the array length is 0 of less than k of k is less thatn or equal to 0
return an empty string.
if k is 1, then return the longest string.
else, loop through the string, */
ConsecutiveString.prototype.longestConsec = function(starr, k){
  var out = "", concat = "";
  if((k <= 0 || starr.length == 0) || k > starr.length){
    return out;
  }
  else if(k === 1){
    var s = starr.sort(function(b, a){
      return a - b;
    });
    out = s[s.length-1]
  }else{
    for(var x = 0; x <= k; x++){
      var f3 = starr[x] + starr[x+1] + starr[x+2];
      var n3 = starr[x+1] + starr[x+2] + starr[x+3];
      if(n3.length > f3.length){
        starr[x] = null;
      }
    }
  }

  return out;
};

module.exports = ConsecutiveString
