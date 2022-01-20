import intersection from "./intersectionTwo"

describe('Intersection', () => {
  it('Should return [2, 2] for nums1=[1,2,2,1] and nums2=[2,2]', () => {
    const nums1 = [1, 2, 2, 1]
    const nums2 = [2, 2]
    const expected = [2, 2]
    expect(intersection(nums1, nums2)).toEqual(expected)
  })

  it('Should return [4, 9] for nums1=[4,9,5] and nums2=[9,4,9,8,4]', () => {
    const nums1 = [4, 9, 5]
    const nums2 = [9, 4, 9, 8, 4]
    const expected = [4, 9]
    expect(intersection(nums1, nums2)).toEqual(expected)
  })
})
