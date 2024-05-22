function partition(s: string): string[][] {
  const resList: string[][] = [];
  const curCombination: string[] = [];

  function getPartition(str: string, startIdx: number) {
    if (startIdx >= str.length) {
      resList.push(curCombination.slice());
      return;
    }

    for (let i = startIdx; i < str.length; i++) {
      if (isPalindrome(str, startIdx, i)) {
        curCombination.push(str.slice(startIdx, i + 1));
      } else {
        continue;
      }

      getPartition(str, i + 1);
      curCombination.pop();
    }
  }

  getPartition(s, 0);
  return resList;
}

function isPalindrome(str: string, left: number, right: number): boolean {
  if (left > right) {
    return false;
  }

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}
