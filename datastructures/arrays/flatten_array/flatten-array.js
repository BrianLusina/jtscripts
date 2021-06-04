class Flattener {
  constructor () {
  }

  /**
     * Flatten a deep nested array
     * Uses recursion to unpack arrays in the arrays, filters out null values
     * @param{Array} nestedArray, arbitrarily nested array
     * @param{Array} flattenedArray, flattened array from recursion
     * @return{Array} flattened array
     */
  flatten (nestedArray, flattenedArray) {
    const self = this
    var flattenedArray = flattenedArray || []

    nestedArray.forEach((element) => {
      if (Array.isArray(element)) {
        return self.flatten(element, flattenedArray)
      } else if (element !== null) {
        flattenedArray.push(element)
      }
    })

    return flattenedArray
  }
}

module.exports = Flattener
