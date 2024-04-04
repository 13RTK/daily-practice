function maxDepth(s: string): number {
  let maxCount: number = 0;
  let curCount: number = 0;

  for (const str of s) {
    if (str === "(") {
      curCount++;
      maxCount = Math.max(maxCount, curCount);
    } else if (str === ")") {
      curCount--;
    }
  }

  return maxCount;
}
