function countWords(inputWords) {
  var c = 0;
  return inputWords.reduce(function(curr, prev){
    var t = {};
    if(prev != curr){
      t = {prev : c};
      console.log(t)
      c++;
    }
    return t;
  });
}

module.exports = countWords
