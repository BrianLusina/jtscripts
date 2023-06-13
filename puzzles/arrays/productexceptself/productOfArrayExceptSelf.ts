export function productExceptSelf(nums: number[]): number[] {
  if (nums.length <= 1) {
    return nums;
  }

  const output = new Array(nums.length).fill(1);
  let prefix = 1;

  for (let index = 0; index < nums.length; index++) {
    output[index] = prefix;
    prefix *= nums[index];
  }

  let postfix = 1;

  for (let i = nums.length - 1; i > -1; i--) {
    output[i] *= postfix;
    postfix *= nums[i];
  }

  return output;
}
