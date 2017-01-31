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

    plaintextSegments() {

    }

    cipherText() {

    }
}

module.exports = Crypto;