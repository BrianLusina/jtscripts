function sym () {
  // convert the arguments into an array
  const args = Array.prototype.slice.call(arguments)

  // return the symmetric difference of two arrays
  const getSymDiff = function (arr1, arr2) {
    // return elements in arr1 that are not in arr2
    function filterFunction (arr1, arr2) {
      return arr1.filter(function (item) {
        return arr2.indexOf(item) === -1
      })
    }

    // run the filter function on each array returning the unique values
    return filterFunction(arr1, arr2)
      .concat(filterFunction(arr2, arr1))
      .filter(function (item, indx, arr) {
        // keep unique items,the index of the current item === index of the first occurrence in the array
        return arr.indexOf(item) === indx
      })
  }
  // reduce all arrays
  return args.reduce(getSymDiff, [])
}

console.log(sym([1, 2, 3], [5, 2, 1, 4]))// should return [3, 4, 5]
console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]))// should return [1, 4, 5]
console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]))// should contain only three elements.
console.log(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]))// should return [1, 4, 5].
console.log(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]))// should contain only three elements.
console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]))// should return [2, 3, 4, 6, 7].
console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]))// should contain only five elements.
console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]))// should return [1, 2, 4, 5, 6, 7, 8, 9].
console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]))// should contain only eight elements.
