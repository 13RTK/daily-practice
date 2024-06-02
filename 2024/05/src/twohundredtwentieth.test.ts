/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
  // Build-in method
  // s.reverse();

  for (let left = 0, right = s.length - 1; left < right; left++, right--) {
    [s[left], s[right]] = [s[right], s[left]];
  }
}
