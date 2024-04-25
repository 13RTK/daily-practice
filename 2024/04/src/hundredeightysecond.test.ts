function addBinary(a: string, b: string): string {
  const resArr: string[] = [];

  let aIdx: number = a.length - 1;
  let bIdx: number = b.length - 1;

  let carry: number = 0;
  while (aIdx >= 0 || bIdx >= 0) {
    let sum: number = carry;

    if (aIdx >= 0) {
      sum += a[aIdx].charCodeAt(0) - "0".charCodeAt(0);
      aIdx--;
    }

    if (bIdx >= 0) {
      sum += b[bIdx].charCodeAt(0) - "0".charCodeAt(0);
      bIdx--;
    }

    carry = sum > 1 ? 1 : 0;
    resArr.push(`${sum % 2}`);
  }

  if (carry) {
    resArr.push(`${carry}`);
  }

  return resArr.reverse().join("");
}
