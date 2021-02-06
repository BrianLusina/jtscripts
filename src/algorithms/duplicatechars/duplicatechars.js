function sortAlphabets(text) {
    return text.split('').sort().join('');
}

function duplicateChars(wordone, wordtwo) {
    if (wordone.length !== wordtwo.length) {
        return false
    }
    return sortAlphabets(wordone) === sortAlphabets(wordtwo);
}