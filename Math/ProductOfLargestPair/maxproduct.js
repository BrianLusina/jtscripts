var MaxProduct = function(){};

MaxProduct.prototype.maxProduct = function(arr){
  var biggest = -Infinity, next_biggest = -Infinity;
  var max = Math.max.apply(null, arr);
  for (var i = 0, n = arr.length; i < n; ++i) {
      var nr = +arr[i]; // convert to number first
      if (nr > biggest) {
          next_biggest = biggest; // save previous biggest value
          biggest = nr;
      } else if (nr < biggest && nr > next_biggest) {
          next_biggest = nr; // new second biggest value
      }
  }
  return max * next_biggest;

};

module.exports = MaxProduct
