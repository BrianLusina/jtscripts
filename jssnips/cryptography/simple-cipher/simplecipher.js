const ALPHABET = "abcdefghijklmnopqrstuvwxyz";

//TODO: this.push is not a function, why?????!!! ARGHHH
class Cipher{
    constructor(userDefinedKey){
        this.key = userDefinedKey || this.randomKey();
        
        this.addEncodedCharacter = this.addEncodedCharacter.bind(this);
        this.addDecodedCharacter = this.addDecodedCharacter.bind(this);
        if(userDefinedKey === "" || this.key.match(/[\dA-Z]/)){
            throw new Error("Bad key!");
        }
    }

    /**
     * Generates 100 random letters to use as a key in the event the user does not define a key to use
     * @returns{String} sequence of 100 randome alphabet characters.
     */
    randomKey(){
        var i, result = "";
        for(i = 0; i < 100; i++){
            result += ALPHABET[this.randomUpTo(ALPHABET.length)];
        }
        return result;
    }

    /**
     * Generates random numbers up to the length of the ALPHABET
     * @param n {Number}, the number to use to generate random numbers
     * @returns{Number} random number
     */
    randomUpTo(n){
        return Math.floor(Math.random() * n);
    }

    /**
     * Encodes a plain text into a cipher given a key
     * @param {String} plainText plain text to pass to be encoded.
     * @returns {String} an encoded string
     */
    encode(plainText){
        var characters = [];
        plainText.split("").forEach(this.addEncodedCharacter, characters, this);
        return characters.join("");
    }

    /**
     * Decodes a cipher text to plain text
     * @param {String} cipherText to decode
     * @returns {String} the decoded cipher text
     */
    decode(cipherText){
        var characters = [];
        cipherText.split("").forEach(this.addDecodedCharacter, characters);
        return characters.join("");
    }

    /**
     * This encodes the character using the key and a character in the alphabet.
     * Since the key will be random or user defined, adding the 
     * @param {String} char is the character currently being processed
     * @param {Number} indx the index of the current character being processed
     * @param {Array} array the array this function is being applied to
     * @return undefined, this does not return, but adds characters to the array
     */
    addEncodedCharacter(char, indx, array){
        // sum of the character index in the alphabet and 
        // second part gets the index of the random character from the key based on the index from 
        // the current character in the array.
        var i = ALPHABET.indexOf(char) + ALPHABET.indexOf(this.key[indx]);
        
        if(ALPHABET.length <= i){
            i -= ALPHABET.length;
        }

       this.push(ALPHABET[i]);
    }

    /**
     * Adds decoded characters to an array
     * @param {String} char current character being processed
     * @param {Number} indx the current index of the character being processed
     * @param {Array} array the current array being processed.
     */
    addDecodedCharacter(char, indx, array){
        var i = ALPHABET.indexOf(char) + ALPHABET.indexOf(this.key[indx]);
        if(i < 0){
            i += ALPHABET.length;
        }
        this.push(ALPHABET[i]);
    }

}

module.exports = Cipher;
