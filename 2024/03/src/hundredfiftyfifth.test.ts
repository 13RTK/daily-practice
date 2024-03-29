function longestPalindrome(s: string): string {
  let longestStr: string = "";

  for (let curIdx = 0; curIdx < s.length; curIdx++) {
    for (
      let subStrIdx = curIdx;
      subStrIdx < s.length;
      subStrIdx++
    ) {
      let curSubStr = s.slice(curIdx, subStrIdx + 1);

      if (
        curSubStr.length > longestStr.length &&
        isPalindrome(curSubStr)
      ) {
        longestStr = curSubStr;
      }
    }
  }

  return longestStr;
}

function isPalindrome(str: string): boolean {
  let start = 0;
  let end = str.length - 1;
  while (start < end) {
    let left = str[start];
    let right = str[end];

    if (left != right) {
      return false;
    }

    start++;
    end--;
  }

  return true;
}
