module.exports = (array, func) => {
  const res = [];
  for (let x = 0; x < array.length; x++) {
    res.push(func(array[x]));
  }
  return res;
};

// alternative
function accumulate(list, accumulator) {
  const out = [];
  let idx = -1;
  const end = Array.isArray(list) ? list.length : 0;

  while (++idx < end) {
    out.push(accumulator(list[idx]));
  }

  return out;
}
