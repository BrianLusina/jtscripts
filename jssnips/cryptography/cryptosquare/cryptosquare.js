class Crypto{
    constructor(phrase){
        this.phrase = phrase;
    }

    /**
     * Remove all numbers, symbols, spaces and punctuation
     * from the text*/
    normalizePlaintext() {
        return this.phrase.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    }

    /**
     * Determines the size of the rectangle, gets the length of the rectangle
     * finds its square root and rounds up the value
     */
    size() {
        var len = Math.sqrt(this.normalizePlaintext().length);
        return Math.ceil(len);
    }

    /**splits the normalized plain text into segments
     * by the given size
     * Will group the text segments into chunks according to the length of the normalized text
     */
    plaintextSegments() {
        let plainText = this.normalizePlaintext();
        let chunks = this.size();
        let reg = new RegExp(".{1," + chunks + "}", "g");

        return plainText.match(reg);
    }

    /**
     * 
     */
    ciphertext() {

    }
}

module.exports = Crypto;