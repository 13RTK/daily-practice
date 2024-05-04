function decrypt(code: number[], k: number): number[] {
  const resArr: number[] = new Array(code.length).fill(0);
  if (!k) {
    return resArr;
  }

  if (k > 0) {
    for (const [idx, _num] of code.entries()) {
      let sum: number = 0;

      for (let startIdx = 1; startIdx <= k; startIdx++) {
        sum += code[(startIdx + idx) % code.length];
      }

      resArr[idx] = sum;
    }
  } else {
    for (const [idx, _num] of code.entries()) {
      let sum: number = 0;

      for (let startIdx = 1; startIdx <= -k; startIdx++) {
        sum += code[(idx - startIdx + code.length) % code.length];
      }

      resArr[idx] = sum;
    }
  }

  return resArr;
}
