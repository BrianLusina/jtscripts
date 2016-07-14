//Caesers cipher
function rot13(str) {

  var codes = [];
    //check if the characters in the string are letters and add to array
    for(var x in str){
    if(str.charCodeAt(x) < 65 || str.charCodeAt(x)>91){
      codes.push(str[x]);
      continue;
    }else{
      //if code is less than 78 add 13 to it to convert to equivalent letter
      if(str.charCodeAt(x) <78){
        codes.push(String.fromCharCode(str.charCodeAt(x)+13));
        continue;
      //else subract 13
      }else{
        codes.push(String.fromCharCode(str.charCodeAt(x)-13));
        continue;
      }
    }
  }
  return codes.join("");
}
var str = "Brian";
console.log(str.charCodeAt(0));
// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("LBH QVQ VG!"));
/*short implementation of rot13*/
function rot13(str) {
  return str.replace(/[A-Z]/gi, function(c){
    return String.fromCharCode(( c <= "Z" ? 90 : 122) >= ( c = c.charCodeAt(0) + 13) ? c : c - 26);
  });
}
