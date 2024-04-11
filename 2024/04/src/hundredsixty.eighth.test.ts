function reverse(x: number): number {
  const isMinus: boolean = x !== Math.abs(x);

  const numStr: string[] = String(Math.abs(x)).split("");
  for (let left = 0, right = numStr.length - 1; left < right; left++, right--) {
    [numStr[left], numStr[right]] = [numStr[right], numStr[left]];
  }

  const reversedNum: number = isMinus
    ? -Number(numStr.join(""))
    : Number(numStr.join(""));

  if (reversedNum > Math.pow(2, 31) - 1 || reversedNum < -Math.pow(2, 31)) {
    return 0;
  }

  return reversedNum;
}
