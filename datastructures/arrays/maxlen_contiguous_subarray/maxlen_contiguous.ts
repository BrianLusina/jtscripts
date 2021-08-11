/**
 * Finds the maximum length of a contiguous sub array in a binary array. Makes use of a hashmap to store the entries in
 * the form of (count, index). We make an entry for a count in the map whenever the count is encountered first and
 * later on use the corresponding index to find the length of the largest sub array with equal number of zeros and ones
 * when the same count is encountered again.
 * Complexity Analysis:
 * - Time complexity : O(n). The entire array is traversed only once.
 * - Space complexity : O(n). Maximum size of the HashMap mapmap will be n, if all the elements are either 1 or 0.
 * @param nums: Binary Array
 * @return: Maximum length of contiguous sub array
 * */
export default function findMaxLength(nums: number[]): number {
    // initializing map to (0, -1) is to avoid the edge cases like [0, 1] when you only have one zero and one.
    const hashmap: Map<number, number> = new Map<number, number>()
    hashmap.set(0, -1)
    let maxLen = 0
    let count = 0

    for (let index = 0; index < nums.length; index++) {
        count = count + (nums[index] === 1 ? 1 : - 1)
        if (hashmap.has(count)) {
            // if the count is already present in the map, then we update the maxLen with the length of the sub array
            // ignoring ts error for hashmap, as we are certain the count is there from the above if condition
            // @ts-ignore
            maxLen = Math.max(maxLen, index - hashmap.get(count))
        } else {
            hashmap.set(count, index)
        }
    }

    return maxLen
}
