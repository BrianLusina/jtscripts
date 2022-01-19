import intersection from "./intersectionOne"

describe('Intersection', () => {
  it('should return [2] for nums1 = [1,2,2,1] and nums2 = [2,2]', () => {
    const nums1 = [1, 2, 2, 1]
    const nums2 = [2, 2]
    const expected = [2]
    expect(intersection(nums1, nums2)).toEqual(expected)
  })
})
