function partitionLabels(s: string): number[] {
  const charLastIdxArr: number[] = new Array(26).fill(0);
  const strArr: string[] = s.split("");

  for (const [idx, curStr] of strArr.entries()) {
    charLastIdxArr[curStr.charCodeAt(0) - "a".charCodeAt(0)] = idx;
  }

  let leftIdx = 0;
  let rightIdx = 0;
  const resArr: number[] = [];

  for (const [idx, curStr] of strArr.entries()) {
    rightIdx = Math.max(
      rightIdx,
      charLastIdxArr[curStr.charCodeAt(0) - "a".charCodeAt(0)]
    );

    if (rightIdx === idx) {
      resArr.push(rightIdx - leftIdx + 1);
      leftIdx = rightIdx + 1;
    }
  }

  return resArr;
}
