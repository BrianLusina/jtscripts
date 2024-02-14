export function canJump(nums: number[]): boolean {
  let currentPosition = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (currentPosition === 0) {
      return false;
    }

    currentPosition -= 1;

    currentPosition = Math.max(currentPosition, nums[i]);
  }

  return true;
}
