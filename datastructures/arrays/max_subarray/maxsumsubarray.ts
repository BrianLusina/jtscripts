export default function maxSumSubArray(nums: number[]): number {
  let maxSoFar = -Number.MAX_SAFE_INTEGER - 1;
  let maxEndingHere = 0;

  for (let index = 0; index < nums.length; index++) {
    maxEndingHere = Math.max(maxEndingHere + nums[index], nums[index]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }

  return maxSoFar;
}
