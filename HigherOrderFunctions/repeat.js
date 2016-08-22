function repeat(operation, num) {
  if(num == 1 || num == 0){
    return operation();
  }
  return repeat(operation(), num-1);
}

// Do not remove the line below
module.exports = repeat
