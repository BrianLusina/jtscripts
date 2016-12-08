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

