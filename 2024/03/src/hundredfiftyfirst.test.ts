function backspaceCompare(s: string, t: string): boolean {
  const srcResultArr: string[] = [];
  const targetResultArr: string[] = [];

  delSpace(srcResultArr, s);
  delSpace(targetResultArr, t);

  return srcResultArr.join("") === targetResultArr.join("");
}

function delSpace(resultStrArr: string[], src: string) {
  for (const curChar of src) {
    if (curChar === "#" && resultStrArr.length > 0) {
      resultStrArr.splice(-1);
    } else if (curChar !== "#") {
      resultStrArr.push(curChar);
    }
  }
}
