import eachCons from './cascadingSubsets'

describe('Cascading Subsets Cases', () => {
  it('Should return cascading lists of 1 element', () => {
	const lst = [3, 5, 8, 13]
	const expected = [[3], [5], [8], [13]]
	const actual = eachCons(lst, 1)

    expect(actual).toEqual(expected)
  })

  it('Should return cascading lists of 2 element', () => {
	const lst = [3, 5, 8, 13]
	const expected = [[3, 5], [5, 8], [8, 13]]
	const actual = eachCons(lst, 2)

    expect(actual).toEqual(expected)
  })

  it('Should return cascading lists of 3 element', () => {
	const lst = [3, 5, 8, 13]
	const expected = [[3, 5, 8], [5, 8, 13]]
	const actual = eachCons(lst, 3)
	expect(actual).toEqual(expected)
  })

  it('Empty list should return an empty list', () => {
	const lst: number[] = []
	const expected: number[] = []
	const actual = eachCons(lst, 3)
	expect(actual).toEqual(expected)
  })
})