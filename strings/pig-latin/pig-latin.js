/**
 * Created by lusinabrian on 27/02/17.
 */

module.exports = {
  /**
   * Translate a phrase to pig latin
   *  it uses a regex to create 3 groups:
   * 1: If a word begins with a vowel sound, add an "ay" sound to
   * the end of the word.
   * 2: If a word begins with a consonant sound, move it to the
   * end of the word, and then add an "ay" sound to the end of the word.
   * @param{String} phrase the word to translate
   * @return{String} translated pig latin string
   * */
  translate: function (phrase) {
    const words = phrase.split(' ');
    const translated = [];

    function translateWord(word) {
      const parts = word.match(/^([^aeiou]?qu|[^aeiou]*)(.+)/);
      const beginning = parts[1];
      const ending = parts[2];

      if (beginning.length === 0) {
        translated.push(word + 'ay');
      } else {
        translated.push(ending + beginning + 'ay');
      }
    }

    words.forEach(translateWord);
    return translated.join(' ');
  },
};
