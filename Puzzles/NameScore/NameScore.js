alpha={'ABCDE':1,'FGHIJ':2,'KLMNO':3,'PQRST':4,'UVWXY':5};
function nameScore(name){
  var nameList = name.replace(/\s+/gi, "").toUpperCase().split("");
  var score = 0, result = {};
  for(var x in alpha){
    for(var i = 0;i < nameList.length; i++){
      if(x.indexOf(nameList[i]) !== -1){
        score += alpha[x];
      }
    }
  }

  result[name] = score;
  return result;
}
