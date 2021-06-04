export default function removeDuplicates(nums: number[]): number {
    if(nums.length < 2) {
        return nums.length;
    }

    let slowPointer = 0;
    let fastPointer = 1;

    for (; fastPointer < nums.length; fastPointer++) {
        if (nums[slowPointer] !== nums[fastPointer]) {
            slowPointer++;
            nums[slowPointer] = nums[fastPointer]; 
        }
    }

    return slowPointer + 1;
};