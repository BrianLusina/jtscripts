export function runningSum(nums: number[]): number[] {
    const n = nums.length;
    let result = Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        result[i] = nums.slice(0, i + 1).reduce((a, b) => a + b);
    }

    return result
};

export function runningSumV2(nums: number[]): number[] {
    for (let i = 1; i < nums.length; i++) {
        nums[i] += nums[i-1];
    }
    return nums;
};