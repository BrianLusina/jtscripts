module.exports = {
    Crypto(phrase){
        this.phrase = phrase;
    },

    /**
     * Remove all numbers, symbols, spaces and punctuation
     * from the text*/
    normalizePlainText(){
        var output = [];
        for(var l = 0; l < this.phrase.length; l++){
            if(this.phrase[l].match(/[a-zA-Z]/)){
                output.push(this.phrase[l]);
            }
        }
        return output.join("");
    },

    size(){

    },

    plaintextSegments(){

    },

    cipherText(){

    }
}