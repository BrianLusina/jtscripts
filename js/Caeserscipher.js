//Caesers cipher
function rot13(str) {

  var codes = [];
  for(var x in str){
    //check if the characters in the string are letters and add to array
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

