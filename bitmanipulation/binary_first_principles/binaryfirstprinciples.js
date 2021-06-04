function Binary (binary) {
  this.binary = binary.match(/^[01]*$/) ? parseInt(binary, 2) : 0
}

// return the number to base 10
Binary.prototype.toDecimal = function () {
  const num = Number(this.binary.toString(10))
  return isNaN(num) ? 0 : num
}

module.exports = Binary
