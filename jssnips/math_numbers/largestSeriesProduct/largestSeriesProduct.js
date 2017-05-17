class Series{
    constructor(series){
        this.series = series;
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

        // loop through string, incrementing the counter by num
        for(let x = 0;x < this.series.length; x += num){
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
}

module.exports = Series;