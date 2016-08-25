function countWords(inputWords) {
  var c = 0, counts = {};
    return inputWords.reduce((prev, curr, indx, inputWords) => {
      if(!counts.hasOwnProperty(inputWords[indx])){
        counts[inputWords[indx]] = 0 ;
      }else{
        counts[inputWords[indx]] += 1;
      }
      return counts;
  });
}

module.exports = countWords
