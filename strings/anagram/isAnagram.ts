String.prototype.sortLetters = function() {
    return this.toLowerCase().split('').sort().join('');
}

export default const isAnagram = (test: String, original: String) => {
    return test.sortLetters() = original.sortLetters();
}