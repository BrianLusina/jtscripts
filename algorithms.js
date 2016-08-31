//This function should return n!
function factorial (n) {
  if(n <0){
    return null;
  }else if(n===0){
    return 1;
  }else{
    return n * factorial(n-1);
  }
}

/**find the missing letter in a pattern of strings, eg abce returns d*/
function fearNotLetter(str) {
  var arr = [];
  for(var x=0;x<str.length;x++){
    arr.push(str.charCodeAt(x));
  }
  for(var i=0;i<arr.length;i++){
		if((arr[i+1]-arr[i]) >1){
      str =String.fromCharCode(arr[i]+1);
      break;
    }else{
      str = undefined;
    }
  }
  return str;
}



function uniteUnique() {
  var res = [];
  for(var x = 0;x<arguments.length;x++){
    for(var i = 0;i<arguments[x].length;i++){
      if(res.indexOf(arguments[x][i]) == -1){
        res.push(arguments[x][i]);
      }
    }
  }
  return res;

}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);


/**Convert characters to HTML equivalents**/
function convertHTML(str) {
  var charHTMLlist = {
    "&" : "&amp;",
    "<" : "&lt;",
    ">" : "&gt;",
    '"' : "&quot;",
    "'" : "&apos;"
  };

  function charMapper(char){
  	return charHTMLlist[char];
  }
  return str.replace(/&|<|>|"|'/gi,charMapper);
}


function spinalCase(str){
return str.replace(/\B([A-Z]+\w)/g,' $1').replace(/([IA])([A-Z])/g, '$1 $2').toLowerCase().replace(/\s/g, "-").replace(/_/g, "");
}

console.log(spinalCase("This Is Spinal Tap"));// should return "this-is-spinal-tap".
console.log(spinalCase("thisIsSpinalTap"));// should return "this-is-spinal-tap".
console.log(spinalCase("The_Andy_Griffith_Show"));// should return "the-andy-griffith-show".
console.log(spinalCase("Teletubbies say Eh-oh"));// should return "teletubbies-say-eh-oh".
console.log(spinalCase("AllThe-small Things"));// should return "all-the-small-things".
