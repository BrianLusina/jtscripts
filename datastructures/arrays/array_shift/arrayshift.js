const ArrayShift = function () {}

ArrayShift.prototype.addingShifted = function (arrayOfArrays, shift) {
  const result = []
  const endArrayLength = arrayOfArrays[0].length + shift * (arrayOfArrays.length - 1)
  for (let i = 0; i < endArrayLength; i++) {
    result.push(0)
  }
  for (let x = 0; x < arrayOfArrays.length; x++) {
    for (let j = 0; j < arrayOfArrays[x].length; j++) {
      result[j + shift * x] += arrayOfArrays[x][j]
    }
  }
  return result
}

module.exports = ArrayShift
