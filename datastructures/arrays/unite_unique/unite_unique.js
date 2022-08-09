function uniteUnique() {
  const res = [];
  for (let x = 0; x < arguments.length; x++) {
    for (let i = 0; i < arguments[x].length; i++) {
      if (res.indexOf(arguments[x][i]) === -1) {
        res.push(arguments[x][i]);
      }
    }
  }
  return res;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
