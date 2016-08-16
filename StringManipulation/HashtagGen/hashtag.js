var HashTag = function(){};

HashTag.prototype.generateHashtag = function (str) {
  var out = "";
  if(str === ""){
    return false;
  }else{
    var words = str.split(" ")
    for(var x = 0;x < words; x++){
      words[x] = words[x].toUpperCase;
      
    }
  }
};

module.exports = HashTag
