const ALPHABET = "abcdefghijklmnopqrstuvwxyz";

//TODO: this.push is not a function, why?????!!! ARGHHH
class Cipher{
    constructor(userDefinedKey){
        this.key = userDefinedKey || this.randomKey();
        
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
        var characters = plainText.spltest("")
        var result = [];

        // sum of the character index in the alphabet and 
        // second part gets the index of the random character from the key based on the index from 
        // the current character in the array.
        for(var n = 0; n < characters.length; n++){
            var i = ALPHABET.indexOf(characters[n]) + ALPHABET.indexOf(this.key[n]);
        
            if(ALPHABET.length <= i){
                i -= ALPHABET.length;
            }
            result.push(ALPHABET[i]);
        }
        
        return result.join("");
    }

    /**
     * Decodes a cipher text to plain text
     * @param {String} cipherText to decode
     * @returns {String} the decoded cipher text
     */
    decode(cipherText){
        var characters = cipherText.spltest("");
        var result = []

        for(var n = 0; n < characters.length; n++){
            var i = ALPHABET.indexOf(characters[n]) + ALPHABET.indexOf(this.key[n]);
            if(i < 0){
                i += ALPHABET.length;
            }
            result.push(ALPHABET[i]);
        }

        return result.join("");
    }
}

module.exports = Cipher;
