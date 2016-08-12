var WordSearch = function(){};

/*Loop through the seq, splitting each word, and checking if the letters are in the query*/
WordSearch.prototype.wordSearch = function(query, seq){
  var results = [], query= query.toLowerCase();
  for(var x = 0;x < seq.length; x++){
    for(var y = 0; y < seq[x].length; y++){
      var c = seq[x][y].toLowerCase();
      if (query.indexOf(c) != -1){
        results.push(seq[x]);
      }
    };
  };
  return (results.length != 0) ? results : ["Empty"];
};

module.exports = WordSearch
