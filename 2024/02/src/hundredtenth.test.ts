function wordBreak(s: string, wordDict: string[]): boolean {
  const canBreak: boolean[] = new Array(s.length + 1).fill(false);
  canBreak[0] = true;

  for (let rightIdx = 1; rightIdx <= s.length; rightIdx++) {
    for (let leftIdx = 0; leftIdx < rightIdx; leftIdx++) {
      if (canBreak[leftIdx] && wordDict.includes(s.slice(leftIdx, rightIdx))) {
        canBreak[rightIdx] = true;
      }
    }
  }

  return canBreak[s.length];
}
