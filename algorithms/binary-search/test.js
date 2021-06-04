const assert = require('assert')
const binarySearch = require('./')

const generateRandomNumberArray = function (arrayLength) {
  const arr = new Array(arrayLength)
  for (let i = 0; i < arrayLength; i++) {
    arr[i] = Math.random()
  }
  return arr.sort()
}

test('binarySearch', function () {
  test('works on an empty array', function () {
    const arr = []
    const index = binarySearch(arr, 'elem')
    assert.equal(index, -1)
  })

  test('works on a not found call in an array of one item', function () {
    const arr = generateRandomNumberArray(1)
    const index = binarySearch(arr, arr[0] + 1)
    assert.equal(index, -1)
  })

  test('works on a found call in an array of one item', function () {
    const arr = generateRandomNumberArray(1)
    const index = binarySearch(arr, arr[0])
    assert.equal(index, 0)
  })

  test('works on a not found call in an array of many items', function () {
    const arr = generateRandomNumberArray(15)
    const index = binarySearch(arr, arr[14] + 1)
    assert.equal(index, -1)
  })

  test('works on a found call in an array of many items', function () {
    const arr = generateRandomNumberArray(15)
    const index = binarySearch(arr, arr[0])
    assert.equal(index, 0)
  })

  test('works on a found call in an array of many items higher in the array', function () {
    const arr = generateRandomNumberArray(15)
    const index = binarySearch(arr, arr[14])
    assert.equal(index, 14)
  })

  test('uses a divide and conquer algorithm', function () {
    const lookups = {}
    const arrayLength = 10000
    const proxyArray = generateRandomNumberArray(arrayLength)
    const smartArray = []
    for (let i = 0; i < 10000; i++) {
      (function (i) {
        Object.defineProperty(smartArray, i, {
          get: function () {
            lookups[i] = true
            return proxyArray[i]
          }
        })
      })(i)
    }
    const indexOfElement = arrayLength - 4
    const lookingFor = proxyArray[indexOfElement]
    const index = binarySearch(smartArray, lookingFor)
    assert.equal(index, indexOfElement)
    assert.equal(Object.keys(lookups).length, 13)
  })
})
