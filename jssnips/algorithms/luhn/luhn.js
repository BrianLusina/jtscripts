class Luhn{
    constructor(card){
        this.addends = this.calculateAddends(card);
        this.checksum = this.calculateChecksum(this.addends);
        this.valid = (card.length <= 1) ? false : this.isValid(this.checksum);
    }

    calculateAddends(number){
        var numAsStr = number.replace(/\s+/gi, "");
        var numbers = numAsStr.split("");
        var addends = [];

        for (var i = 0; i < numbers.length; i++) {
            var index = numbers.length - 1 - i;
            var currentAddend = parseInt(numbers[index], 10);

            if ((i + 1) % 2 === 0) {
                currentAddend = currentAddend * 2;
                if (currentAddend > 10) {
                    currentAddend = currentAddend - 9;
                }
            }

            addends.push(currentAddend);
        }

        return addends.reverse();
    }

    calculateChecksum(numbers){
        return numbers.reduce(function(a, b){
            return a+b;
        });
    }


    /**
     * checks if a card is valid. will perform a check on the sum to check if it is divisible by 10
     * @param{Number} sum, sum of all the digits 
     * @return {Boolean} 
     */
    isValid(sum){
        return sum % 10 === 0;
    }

}

module.exports = Luhn;