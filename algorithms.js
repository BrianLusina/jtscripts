//Finding the range between two numbers where the order is not definite
//the array will always have two numbers
function sumAll(arr){
  var max = Math.max(arr[0],arr[1]);
  var min = Math.min(arr[1],arr[0]);
  return (max + min) * (max - min+1)/2;
}

/**
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
*/
function diffArray(arr1, arr2) {
  var newArr = [];
  for(var x =0;x<arr1.length;x++){
    if(arr2.indexOf(arr1[x]) === -1){
      newArr.push(arr1[x]);
    }
  }

  for(var i =0;i<arr2.length;i++){
    if(arr1.indexOf(arr2[i]) === -1){
      newArr.push(arr2[i]);
    }
  }
  return newArr;
  }

/**
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.**/
  function convertToRoman(num) {
    if (!+num)
  		return false;
    //convert the number to a string and split it into an array
    //store key values of roman numerals
  	var	digits = String(+num).split(""),
  		key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
  		       "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
  		       "","I","II","III","IV","V","VI","VII","VIII","IX"],
  		roman = "",
  		i = 3;
  	while (i--)
  		roman = (key[+digits.pop() + (i * 10)] || "") + roman;
  	return Array(+digits.join("") + 1).join("M") + roman;
  }

  convertToRoman(36);

function wherArtThou(collection,source){}
  var arr= [];
  //loop through JSON
  for(var i in source){} //loop through each prop in source
  for(var x in collection){
  //check if each obj in JSON has prop and if value is the equal
  	if(collection[x].hasOwnProperty(i) && collection[x][i]===source[i]){
      arr.push(collection[x]);
    	}
    }
    return arr;
}


/*
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"


*/

function myReplace(str, before, after) {
  var arr = str.split(" "); //split into an array
  var character = "";
  var i=0;
  var ind = 0;
  var l ="";
  //loop through the array
  for(var x=0;x<arr.length;x++){
    //if there is a match in the array to the word to replace
    if(arr[x] === before){
      //check if any letter in the word is uppercase
      while(i<before.length){
        character = before.charAt(i); //
        if(character === character.toUpperCase()){
          ind = before.indexOf(character); //store the index of the capitalized char
          l = after.charAt(ind).toUpperCase();
          after = after.replace(after.charAt(ind),l);
        }
        i++;
      }
      arr[x] = after;
    }
  }
  str = arr.join(" ");
  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
myReplace("Let us go to the store", "store", "mall")// should return "Let us go to the mall".
myReplace("He is Sleeping on the couch", "Sleeping", "sitting")// should return "He is Sitting on the couch".
myReplace("This has a spellngi error", "spellngi", "spelling") //should return "This has a spelling error".
myReplace("His name is Tom", "Tom", "john")// should return "His name is John".
myReplace("Let us get back to more Coding", "Coding", "algorithms")// should return "Let us get back to more Algorithms".

/***
While developing a website, you detect that some of the members have troubles logging in. Searching through the code you find that all logins ending with a "_" make problems. So you want to write a function that takes an array of pairs of login-names and e-mails, and outputs an array of all login-name, e-mails-pairs from the login-names that end with "_".

If you have the input-array:

[ [ "foo", "foo@foo.com" ], [ "bar_", "bar@bar.com" ] ]
it should output

[ [ "bar_", "bar@bar.com" ] ]
You have to use the filter-method of Python, which returns each element of the array for which the filter-method returns true.
***/
function searchNames( logins ){
  var res = logins.filter(function filterFn(logins){
  	for(var x=0;x<logins.length;x++){
      if(logins[x].charAt(logins[x].length-1) === "_"){
        return logins[x];
			}
  	}
	});
  return res;
}

var data = {
"wendigo":"Burn it to death",
"vampire" : "Behead it with a machete",
"shapeshifter":"Silver knife or bullet to the heart",
"angel":"Use the angelic blade",
"demon":"Use Ruby's knife, or some Jesus-juice",
"ghost":"Salt and iron, and don't forget to burn the corpse",
"dragon":"You have to find the excalibur for that",
"djinn":"Stab it with silver knife dipped in a lamb's blood",
"pagan god":"It depends on which one it is",
"leviathan":"Use some Borax, then kill Dick",
"ghoul":"Behead it",
"jefferson starship":"Behead it with a silver blade",
"reaper":"If it's nasty, you should gank who controls it",
"rugaru":"Burn it alive",
"skinwalker":"A silver bullet will do it",
"phoenix":"Use the colt",
"witch":"They are humans",
  }
function bob(str) {
    if(data.hasOwnProperty(str)){
      	return data[str] + ", idjits!";
    }else{
    	return "I have friggin no idea yet, idjits!";
    }
}

function translatePigLatin(str) {
  if(str.match(/^[aeiou]./i)){
      return str+"way";
  }else{
    var c = str.match(/^[^aeiou]+/i);
    return str.replace(/^[^aeiou]+/i,"")+c.join()+"ay";
  }
}

console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("california"))// should return "aliforniacay".
console.log(translatePigLatin("paragraphs"))// should return "aragraphspay".
console.log(translatePigLatin("glove"))// should return "oveglay".
console.log(translatePigLatin("algorithm"))// should return "algorithmway".
console.log(translatePigLatin("eight"))// should return "eightway".



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
