/**
 * @param {number[]} nums
 * @return {number[]}
 */
export default function buildArray(nums: number[]): number[] {
    const ans: number[] = [];

    for (let index = 0; index < nums.length; index++) {
        const element = nums[nums[index]];
        ans.push(element)
    }

    return ans;
};