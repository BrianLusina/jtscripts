"use-strict";

class Trinary{
    constructor(number){
        this.number = number;
    }

    /**Converts given trinary number to decimal
     * by first principles.
     */
    toDecimal(){
        // check if the input is a valid number
        let num = new RegExp(/[0-9]+/, "g");

        // return early if the string is not a valid number
        if(!this.number.match(num)){
            return 0;
        }

        // split and reverse the array of numbers
        var list = this.number.split("").reverse();
        var sum = 0;
        for(var x = 0;x < list.length; x++){
            sum+= +list[x] * Math.pow(3, x);
        }
        return sum;
    }
}

module.exports = Trinary;

var BASE = 3;

function Trinary_2(decimal) {
  this.digits = decimal.split('').reverse().map(Number);
}

Trinary_2.prototype.toDecimal = function() {
  var decimal = this.digits.reduce(this.accumulator, 0);
  return isNaN(decimal) ? 0 : decimal;
};

Trinary_2.prototype.accumulator = function(decimal, digit, index) {
  return decimal += digit * Math.pow(BASE, index);
};