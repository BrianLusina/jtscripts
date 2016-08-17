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
    let lens = strarr.map( (_,i,arr) => arr.slice(i,i+k).join('').length ),
        i = lens.indexOf( Math.max(...lens) );
    out = strarr.slice(i,i+k).join('')
    }
  }

  return out;
};

module.exports = ConsecutiveString
