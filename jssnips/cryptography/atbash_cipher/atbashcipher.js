"use-strict";

var LETTERS = 'abcdefghijklmnopqrstuvwxyz';
var REVERSED_LETTERS = 'zyxwvutsrqponmlkjihgfedcba';

module.exports = {

    insertSpacing(str, interval){
        // matches new characters except line terminators
        var matcher = new RegExp(".{1,"+ interval +"}", "g");
        return str.match(matcher).join(" ");
    },

    invert(character){
        this.push(character.match(/\d/) ? character :LETTERS[REVERSED_LETTERS.indexOf(character)]);
    },
    encode(phrase){
        var encoded = "", characters = [];
        phrase.toLowerCase().split("").forEach(this.invert, characters);
        encoded = this.insertSpacing(characters.join(""), 5);
        return encoded;
    }
}