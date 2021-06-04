const minMax = require('./minmax')

test('Test 1', () => {
  const tester = function (arr, res) {
    const minmax = new minMax()
    expect(minmax.getMaxMin(arr)).toEqual(res)
  }

  let i, r
  tester([1, 2, 3, 4, 5], [1, 5])
  tester([2334454, 5], [5, 2334454])

  for (i = 0; i < 20; ++i) {
    r = Math.random()
    tester([r], [r, r])
  }
})
