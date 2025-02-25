// Source: https://leetcode.com/problems/circular-array-loop/
/**
 * CircularArrayLoop Determines if a circular array loop exists in the provided slice of integers
 * This code implements the Floyd's Tortoise and Hare algorithm to determine if a circular array loop exists in the
 * provided slice of integers. The algorithm uses two pointers, slow and fast, that move at different speeds through the
 * list, eventually meeting at the start of the loop. The algorithm assumes that the list contains a circular loop and
 * that the numbers in the list are indices that point to other numbers in the list.
 *
 * This requires explicit handling of negative indices to ensure that the pointers move correctly through the array when using the modulo operator.
 *
 * Algorithm:
 *   - Direction Check: Determine the direction of movement (forward or backward) based on the sign of the current
 *     element.
 *   - Cycle Detection: Use a slow and fast pointer approach (similar to Floyd's Tortoise and Hare algorithm) to detect
 *     a cycle.
 *   - Cycle Validation: Ensure that the cycle is valid (i.e., it covers all elements and is not a subset of the array).
 *
 * Time Complexity:
 *
 * The time complexity is O(n), where n is the length of the array. This is because each element is processed at most once.
 *
 * Space Complexity:
 *
 * The space complexity is O(1) since we are using a constant amount of extra space.
 *
 * @param {number[]} nums list of integers
 * @returns {boolean} true if a circular array loop exists, false otherwise
 */
export const circularArrayLoop = (nums: number[]): boolean => {
  const size = nums.length;

  for (let x = 0; x < size; x++) {
    // skip as we have already seen this index
    if (nums[x] == 0) {
      continue;
    }

    // determine the direction of the cycle based on the sign of the current element
    const direction = nums[x] > 0 ? 1 : -1;

    // set the slow and fast pointers to the current index
    let slow = x;
    let fast = x;

    // eslint-disable-next-line no-constant-condition
    while (true) {
      // move the slow pointer one step forward
      slow = (slow + nums[slow]) % size;

      if (slow < 0) {
        // handle negative indices
        slow += size;
      }

      if (nums[slow] * direction <= 0) {
        // direction changed or the slow pointer moved out of the cycle
        break;
      }

      // move the fast pointer two steps forward
      fast = (fast + nums[fast]) % size;
      if (fast < 0) {
        // handle negative indices
        fast += size;
      }

      if (nums[fast] * direction <= 0) {
        // direction changed or the fast pointer moved out of the cycle
        break;
      }

      // move the fast pointer one more step forward
      fast = (fast + nums[fast]) % size;
      if (nums[fast] * direction <= 0) {
        // direction changed or the fast pointer moved out of the cycle
        break;
      }

      // check if the slow and fast pointers have met
      if (slow == fast) {
        let nextSlow = (slow + nums[slow]) % size;

        if (nextSlow < 0) {
          // handle negative indices
          nextSlow += size;
        }

        // validate the cycle by checking if the cycle length is greater than 1
        if (slow == nextSlow) {
          // cycle length is 1, this is not a valid cycle
          break;
        }
        return true;
      }
    }

    // set all elements in the cycle to 0
    slow = x;
    while (nums[slow] * direction > 0) {
      const next = (slow + nums[slow]) % size;
      nums[slow] = 0;
      slow = next;
    }
  }
  return false;
};
