'use strict';
let strain = {
    
    create(array, filter, keepMatches){
        var results = [];
        for(var x = 0;x< array.length; x++){
            if(filter(array[x]) === keepMatches){
                results.push(array[x]);
            }
        }

        return results;
    },

    keep(array, filter){
        return this.create(array, filter, true);
    },

    discard(array, filter){
        return this.create(array, filter, false);
    }
}
module.exports = strain;

// or alternatively
// module.exports = {
//   strain: function(array, filter, keepMatches) {
//     var results = [];
//     for (var i=0; i < array.length; i++) {
//       var item = array[i];
//       if (filter(item) === keepMatches) {
//         results.push(item);
//       }
//     }
//     return results;
//   },

//   keep: function (array, filter) {
//     return this.strain(array, filter, true);
//   },

//   discard: function (array, filter) {
//     return this.strain(array, filter, false);
//   }
// };