const setIntersection = (set1: Set<number>, set2: Set<number>) => {
    return [...set1].filter((x) => set2.has(x))
}

/**
 * Returns the intersection of two arrays. Uses a set to solve the problem in linear time. A set provides in/contains
 * operation in O(1) time in average case. This converts both arrays to sets and iterates over the smallest set
 * checking the presence of each element in the other larger set. The time complexity is O(n+m) where n is the size of
 * the first array and m is the size of the second array.
 * @param nums1 1st Array of numbers
 * @param nums2 2nd Array of numbers
 * @returns intersection between the 2 array of numbers
 */
export default function intersection(nums1: number[], nums2: number[]): number[] {
    const set1 = new Set(nums1)
    const set2 = new Set(nums2)

    if (set1.size < set2.size) {
      return setIntersection(set1, set2)
    } else {
      return setIntersection(set2, set1)
    }
}
