function countSubstrings(s: string): number {
  let res: number = 0;

  for (let idx = 0; idx < s.length; idx++) {
    res += countPalindrome(s, idx, idx);
    res += countPalindrome(s, idx, idx + 1);
  }

  return res;
}

const countPalindrome = (str: string, left: number, right: number) => {
  let res: number = 0;

  while (left >= 0 && right < str.length && str[left] === str[right]) {
    res++;

    left--;
    right++;
  }

  return res;
};
