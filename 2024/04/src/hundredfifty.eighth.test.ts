function isPalindrome(x: number): boolean {
  if (x < 0) {
    return false;
  }

  const str: string = String(x);

  for (
    let left = 0, right = str.length - 1;
    left < right;
    left++, right--
  ) {
    if (str[left] !== str[right]) {
      return false;
    }
  }

  return true;
}
