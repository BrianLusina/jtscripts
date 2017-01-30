module.exports = (array, func) => {
    var res = [];
    for(var x = 0; x < array.length; x++){
        res.push(func(array[x]));
    }
    return res;
}

// alternative
function accumulate(list, accumulator) {
  var out = [];
  var idx = -1;
  var end = Array.isArray(list) ? list.length : 0;

  while (++idx < end) {
    out.push(accumulator(list[idx]));
  }

  return out;
};
