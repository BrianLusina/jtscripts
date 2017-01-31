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

    size() {

    }

    plaintextSegments() {

    }

    cipherText() {

    }
}

module.exports = Crypto;