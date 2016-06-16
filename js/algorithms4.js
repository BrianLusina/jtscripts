/**
"""
Write a module Converter that can take ASCII text and convert it to hexadecimal. The class should also be able to take hexadecimal and convert it to ASCII text.

Example

Converter.to_hex("Look mom, no hands")
=> "4c6f6f6b206d6f6d2c206e6f2068616e6473"

Converter.to_ascii("4c6f6f6b206d6f6d2c206e6f2068616e6473")
=> "Look mom, no hands"
"""
*/
var Converter={
  toAscii: function(hex){
    var h = hex.toString(), str ="";
    for(var x = 0;x<h.length;x+=2){
      str+=String.fromCharCode(parseInt(h.substr(x,2),16))
    }
    return str;
  },
  toHex:function(ascii){
    var arr =[];
    len = ascii.length;
    for(var i =0;i<len;i++){
      var hex = Number(str.charCodeAt(i)).toString(16);
      arr.push(hex);
    }
    return arr.join("");
  }
}
var str = "Look mom, no hands";
var hex = "4c6f6f6b206d6f6d2c206e6f2068616e6473";

console.log(Converter.toHex(str));//, hex
console.log(Converter.toAscii(hex));//, str
console.log(Converter.toHex(Converter.toAscii(hex)));//, hex
console.log(Converter.toAscii(Converter.toHex(str)));//, str


/**"""
Make a program that takes a list of a random amount (but will always have atleast 1 number in) of numbers and returns the average, or mean, of the numbers. Also the program should return "Incorrect" if the value entered is a string.

(Use integer division to divide the numbers, (if you actually use the division method))

Ex: If input is [70, 70, 70, 70, 70] the program should return 70 (for obvious reasons)
"""
**/
function average(n){
  if(typeof n === "string"){
  	return "Incorrect";
  }else
  	return n.reduce(function(x,y){
    	return x+y;
  	})/n.length;
}
console.log(average("Hello please let me break your program"));
console.log(average([70, 70]));//, 70);
console.log(average([40, 20, 5]));//', 195/9);


/**
Write a function that removes each 9 that it is in between 7s.
seven_ate9('79712312') => '7712312'
seven_ate9('79797') => '777'
Input: String Output: String
*/
function seven_ate9(sevens){
  var nines = /79(?=7)/gi
  return sevens.replace(nines,"7");
}



/**
Make a program that will take an int (x) and give you the summation of all numbers from 1 up to x included. If the given input is not an integer, return "Error 404".

Examples:

summation(25)==325
summation(2.56)=="Invalid Value"
*/
function summation(x){
    var arr =0;
    if(parseInt(x,10) !== x){
        return "Invalid Value";
    }else{
        for(var i=1;i<=x;i++){
          arr+=i;
        }
    	}
  	return arr;
}


/*
using n as a parameter in the calling function pattern, where n should be a natural number; complete the codes to get the pattern (take the help of examples). There is no newline in the end (after the pattern ends).

Examples

pattern(3):

1
1*2
1**3
pattern(10):

1
1*2
1**3
1***4
1****5
1*****6
1******7
1*******8
1********9
1*********10
*/
function pattern(n){
  if (n < 1) return "";
  var output = "1";
  for (let i = 2; i <= n; ++i) {
    output += "\n1" + Array(i).join("*") + i;
  }
  return output;
}


/***/
function maskify(cc) {
var ans="",hash="",last="";
    if(cc.length <= 4 || cc === ""){
        return cc;
    }else{
        hash = cc.slice(0,-4);
        last=cc.slice(-4);
        for(var x=0;x<hash.length;x++){
        		ans +=hash[x].replace(hash[x],"#");
        }
    }
    return ans+last;
}
