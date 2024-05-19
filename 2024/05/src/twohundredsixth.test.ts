class NumArray {
  nums: number[];

  constructor(nums: number[]) {
    this.nums = nums;
  }

  sumRange(left: number, right: number): number {
    return this.nums.slice(left, right + 1).reduce((acc, val) => acc + val);
  }
}
