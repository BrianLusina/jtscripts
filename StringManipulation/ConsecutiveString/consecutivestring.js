var ConsecutiveString = function(){};

ConsecutiveString.prototype.longestConsec = function(starr, k){
  var out = ""
  if((k <= 0 || starr.length == 0) || k > starr.length){
    return out;
  }
  else if(k === 1){
    var s = starr.sort(function(b, a){
      return a - b;
    });
    out = s[s.length-1]
  }else{
    
  }

  return out;
};

module.exports = ConsecutiveString
