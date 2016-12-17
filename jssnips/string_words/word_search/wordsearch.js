var WordSearch = function(){};

/*Loop through the seq, splitting each word, and checking if the letters are in the query*/
WordSearch.prototype.wordSearch = function(query, seq){
  var results = [], query = query.toLowerCase();
  for(var x = 0; x < seq.length; x++){
    var c = seq[x].toLowerCase();
    if(c.indexOf(query) != -1){
      results.push(seq[x]);
    }
    };
  return (results.length != 0) ? results : ["Empty"];
};

module.exports = WordSearch
