function lengthOfLastWord(s: string): number {
  let maxLength: number = 0;
  const strArr: string[] = s.trim().split(" ");

  strArr.forEach((str) => {
    maxLength = Math.max(str.trim().length, str.length);
  });

  return maxLength;
}
