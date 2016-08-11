var DuplicateEncode = function(){};

DuplicateEncode.prototype.duplicateencode = function (word) {
  var letterCount = 1, counter = {}, out = "", word = word.toLowerCase();
  for(var x = 0; x < word.length; x++){
    counter[word[x]] = (!counter.hasOwnProperty(word[x])) ? letterCount: letterCount++;
  }
  for(var y in counter){
    out += (counter[y] > 1) ? ")".repeat(counter[y]) : "(";
  }
  console.log(counter);
  return out;
};
module.exports = DuplicateEncode
