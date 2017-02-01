"use-strict";

class Trinary{
    constructor(number){
        this.number = number;
    }

    /**Converts given trinary number to decimal
     * by first principles.
     */
    toDecimal(){
        // split and reverse the array of numbers
        var list = this.number.split("").reverse();
        var sum = 0;
        for(var x = 0;x < list.length; x++){
            sum+= +list[x] * Math.pow(3, x);
        }
        return sum;
    }
}