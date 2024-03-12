/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  const actualMove: number = k % nums.length;

  const movePart: number[] = Array.from(
    { length: actualMove },
    (idx: number) => nums[idx + actualMove]
  );

  nums.splice(
    nums.length - actualMove,
    actualMove,
    ...nums.slice(0, actualMove)
  );
  nums.splice(0, 0, ...movePart);
}
