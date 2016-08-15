var MaxProduct = function(){};

/*
alternative could be to sort it in descending order and multiply the first two elements, but it would be slower.
  arr.sort(function(a, b){
    return b-a;
  });

  console.log(arr[0] * arr[1]);
  return arr[0] * arr[1];
*/
MaxProduct.prototype.maxProduct = function(arr){
  var biggest = -Infinity, next_biggest = -Infinity;
  for (var i = 0, n = arr.length; i < n; ++i) {
      var nr = +arr[i]; // convert to number first
      if (nr > biggest) {
          next_biggest = biggest; // save previous biggest value
          biggest = nr;
      } else if (nr < biggest && nr > next_biggest) {
          next_biggest = nr; // new second biggest value
      }
  }
  return biggest * next_biggest;
};

module.exports = MaxProduct
