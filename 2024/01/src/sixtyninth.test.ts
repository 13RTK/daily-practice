function letterCombinations(digits: string): string[] {
  const keyboardMap: string[] = ["abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];

  if (digits.length <= 1) {
    return digits.length ? keyboardMap[+digits - 2].split("") : [];
  }

  const resArr: string[] = [];
  const curCombine: string[] = [];

  const getCombine = (str: string, startIdx: number): void => {
    if (startIdx >= str.length) {
      resArr.push(curCombine.join(""));
      return;
    }

    const curKeyboardStr: string = keyboardMap[+str[startIdx] - 2];
    for (const curChar of curKeyboardStr) {
      curCombine.push(curChar);

      getCombine(str, startIdx + 1);

      curCombine.pop();
    }
  }

  getCombine(digits, 0);
  return resArr;
};
