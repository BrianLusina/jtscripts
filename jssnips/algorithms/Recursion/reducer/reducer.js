function reduce(arr, fn, initial) {
  if(!arr.length)
    return {};

  var head = arr[0];
  var tail = arr.slice(1);

  return reduce(arr, fn(prev, curr, indx, arr){
      return prev + curr;
  }, initial){
  }
  }

module.exports = reduce
