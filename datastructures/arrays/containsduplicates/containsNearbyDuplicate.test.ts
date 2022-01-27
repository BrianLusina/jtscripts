import containsNearbyDuplicate from "./containsNearbyDuplicate"

describe('Contains Nearby Duplicate', () => {
  it('should return true for nums = [1,2,3,1] and k = 3', () => {
    const nums: number[] = [1, 2, 3, 1]
    const k: number = 3
    const expected: boolean = true
    const actual: boolean = containsNearbyDuplicate(nums, k)
    expect(actual).toEqual(expected)
  })

  it('should return true for nums = [1,0,1,1] and k = 1', () => {
    const nums: number[] = [1, 0, 1, 1]
    const k: number = 1
    const expected: boolean = true
    const actual: boolean = containsNearbyDuplicate(nums, k)
    expect(actual).toEqual(expected)
  })

  it('should return false for nums = [1,2,3,1,2,3] and k = 2', () => {
    const nums: number[] = [1, 2, 3, 1, 2, 3]
    const k: number = 2
    const expected: boolean = false
    const actual: boolean = containsNearbyDuplicate(nums, k)
    expect(actual).toEqual(expected)
  })
})
