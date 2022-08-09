const MaxProduct = function () {};

/*
alternative could be to sort it in descending order and multiply the first two elements, but it would be slower.
  arr.sort(function(a, b){
    return b-a;
  });

  console.log(arr[0] * arr[1]);
  return arr[0] * arr[1];

*/
MaxProduct.prototype.maxProduct = function (arr) {
  let biggest = -Infinity;
  let next_biggest = -Infinity;
  for (let i = 0, n = arr.length; i < n; ++i) {
    const nr = Number(arr[i]); // convert to number first
    if (nr > biggest) {
      next_biggest = biggest; // save previous biggest value
      biggest = nr;
    } else if (nr < biggest && nr > next_biggest) {
      next_biggest = nr; // new second biggest value
    }
  }
  return biggest * next_biggest;
};

// second alternative
MaxProduct.prototype.maxProduct_v2 = function (a) {
  const biggest = Math.max.apply(Math, a);
  a.splice(a.indexOf(biggest), 1);
  return biggest * Math.max.apply(Math, a);
};

module.exports = MaxProduct;
