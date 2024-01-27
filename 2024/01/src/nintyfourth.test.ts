function monotoneIncreasingDigits(n: number): number {
  const numCharArr: string[] = n.toString().split("");
  let startModifyIdx: number = Number.MAX_SAFE_INTEGER;

  for (let idx = numCharArr.length - 1; idx >= 1; idx--) {
    let curNumChar = numCharArr[idx];
    let preNumChar = numCharArr[idx - 1];

    if (curNumChar < preNumChar) {
      numCharArr[idx - 1] = String.fromCharCode(
        numCharArr[idx - 1].charCodeAt(0) - 1
      );
      startModifyIdx = idx;
    }
  }

  for (; startModifyIdx < numCharArr.length; startModifyIdx++) {
    numCharArr[startModifyIdx] = "9";
  }

  return Number(numCharArr.join(""));
}
