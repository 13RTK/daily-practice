function uniqueOccurrences(arr: number[]): boolean {
  const numCnt: number[] = new Array(2001).fill(0);

  for (const curNum of arr) {
    numCnt[curNum + 1000]++;
  }

  numCnt.sort((o1, o2) => o1 - o2);
  for (let i = 1; i < numCnt.length; i++) {
    if (numCnt[i] != 0 && numCnt[i] == numCnt[i - 1]) {
      return false;
    }
  }

  return true;
}
