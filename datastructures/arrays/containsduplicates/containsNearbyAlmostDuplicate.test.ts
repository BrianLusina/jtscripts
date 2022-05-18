import containsNearbyAlmostDuplicate from "./containsNearbyAlmostDuplicate"

describe('Contains Nearby Duplicate', () => {
  it('should return true for nums = [1,2,3,1] and k = 3 and t = 0', () => {
    const nums: number[] = [1, 2, 3, 1]
    const k: number = 3
    const t: number = 0
    const expected: boolean = true
    const actual: boolean = containsNearbyAlmostDuplicate(nums, k, t)
    expect(actual).toEqual(expected)
  })

  it('should return true for nums = [1,0,1,1] and k = 1 and t = 2', () => {
    const nums: number[] = [1, 0, 1, 1]
    const k: number = 1
    const t: number = 2
    const expected: boolean = true
    const actual: boolean = containsNearbyAlmostDuplicate(nums, k, t)
    expect(actual).toEqual(expected)
  })

  it('should return false for nums = [1,5,9,1,5,9] and k = 2 and t = 3', () => {
    const nums: number[] = [1, 5, 9, 1, 5, 9]
    const k: number = 2
    const t: number = 3
    const expected: boolean = false
    const actual: boolean = containsNearbyAlmostDuplicate(nums, k, t)
    expect(actual).toEqual(expected)
  })
})
