class Series{
    constructor(series){
        if(series.match(/[^0-9]/)){
            throw new Error("Invalid input.");
        }
        this.series = series;
        this.digits = this.getDigits();
    }

    /**
     * Gets digits from the series input
     * @returns {Array} of numbers from the series input
     */
    getDigits(){
        return this.series.split("").map(Number);
    }

    /**
     * Checks the input for validity
     * @param {Object} input object input
     */
    checkInput(input){
        if(typeof input !== "number" || input < 0){
            throw Error("Invalid input.");
        }

        if(input > this.digits.length){
            throw Error("Slice size is too big.");
        }
    }

    /**
     * Gets the largest product from a series made of digits
     * 
     * @param {Number} num digits to calculate the largest product in a series
     * @returns {Number} largets product
     */
    largestProduct(num){
        // stores the results of the computation
        let result = {};

        // perform sanity checks
        this.checkInput(num);

        // if number is 0 and series length is 0
        if((num === 0 && this.digits.length === 0)|| num === 0){
            return 1;
        }

        // loop through string, incrementing the counter by num
        for(let x = 0;x < this.digits.length; x += num){
            // extract a chunk of num from the series
            let currentSeries = this.series.slice(x, x + num);

            // split the series and convert each to a number, reduce to get the result;
            let val = currentSeries.split("").map(Number).reduce(function(a, b){
                return a * b;
            });

            // find the result of the multiplication, store in object for memoization
            result[currentSeries] = val;
        }
        // get the values from the result object
        let values = Object.values(result);
        
        // find the largest in the array
        return Math.max.apply(null, values);
    }

    /**
     * Creates slices from the given size of the slice
     * @param {Number} size size of the slice
     * @returns {Array} size dimensional array
     */
    createSlices(size){
        let result = [], slices = [];

        for(let x = 0; x < this.digits.length - size + 1; x++){
            
            for(let y = 0; y < size; y++){
                slices.push(this.digits[x + y]);
            }
            
            // add the slices to the result
            result.push(slices);
            
            // reset the slices
            slices = [];
        }

        return result;
    }
}

module.exports = Series;