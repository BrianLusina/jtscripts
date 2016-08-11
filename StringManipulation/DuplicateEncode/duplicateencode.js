var DuplicateEncode = function(){};

DuplicateEncode.prototype.duplicateencode = function (word) {
  var letterCount = 0, counter = {}, out = "";
  for(var x = 0; x < word.length; x++){
    if(!counter.hasOwnProperty(word[x])){
      counter.word[x] = letterCount++;
    }else{
      var c = counter.word[x];
      c++;
    }
  }
  for(var y in counter){
    out += (counter[y] == 1) ?"(" : ")";
  }

  return out;
};
module.exports = DuplicateEncode
