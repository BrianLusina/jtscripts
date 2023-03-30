export default class NumArray {
  private nums: number[];
  constructor(nums: number[]) {
    this.nums = nums;
  }

  sumRange(left: number, right: number): number {
    const range = this.nums.slice(left, right + 1);
    return range.reduce((a, b) => a + b);
  }
}
