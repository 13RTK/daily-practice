function plusOne(digits: number[]): number[] {
  digits.reverse();
  const resArr: number[] = new Array(digits.length).fill(0);

  let carry: number = 1;
  for (const [idx, digit] of digits.entries()) {
    const curSum = carry + digit;
    resArr[idx] = curSum % 10;

    carry = Math.trunc(curSum / 10);
  }

  if (carry) {
    resArr.push(1);
  }

  return resArr.reverse();
}
