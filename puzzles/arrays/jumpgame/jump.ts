export function jump(nums: number[]): number {
  const size = nums.length;
  // destination is last index
  const destination = size - 1;

  // record of current coverage, record of last jump index
  let currentCoverage = 0;
  let lastJumpIndex = 0;

  // min number of jumps
  let minJumps = 0;

  // if start index == destination index == 0
  if (size == 1) {
    return 0;
  }

  // Greedy strategy: extend coverage as long as possible with lazy jump
  for (let idx = 0; idx < nums.length; idx++) {
    // extend coverage as far as possible
    currentCoverage = Math.max(currentCoverage, idx + nums[idx]);

    // forced to jump (by lazy jump) to extend coverage
    if (idx == lastJumpIndex) {
      // update last jump index
      lastJumpIndex = currentCoverage;

      // update counter of jump by +1
      minJumps += 1;

      // check if destination has been reached
      if (currentCoverage >= destination) {
        return minJumps;
      }
    }
  }

  return minJumps;
}
