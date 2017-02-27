/**
 * Created by lusinabrian on 27/02/17.
 */
function PigLatin(){

}

/**
 * Translate a phrase to pig latin
 * 1: If a word begins with a vowel sound, add an "ay" sound to
 * the end of the word.
 * 2: If a word begins with a consonant sound, move it to the
 * end of the word, and then add an "ay" sound to the end of the word.
 * @param{String} phrase the word to translate
 * @return{String} translated pig latin string
 * */
PigLatin.prototype.translate = function(phrase){
  if(phrase.charAt(0).match(/(a|e|i|o|u)/gi)){
    return phrase + "ay";
  }else{
    return phrase + phrase.charAt(0) + "ay";
  }
}


module.exports = PigLatin;

