class Series{
    constructor(number_str){
        this.number_str = number_str;
        this.digits = this.getDigits();
    }

    /**
     * Gets the digits from the provided number and returns an array of numbers
     * splits the string into string digits and converts each digit to a number
     * @returns {Array}
     */
    getDigits(){
        return this.number_str.split("").map(function(x){
            return +x;
            }
        );
    }
}

module.exports = Series;
