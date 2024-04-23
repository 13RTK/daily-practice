function convert(s: string, numRows: number): string {
  if (s.length === 1 || numRows === 1) {
    return s;
  }

  const strArr: string[][] = new Array(numRows).fill([]);
  let curRow: number = 0;
  let boundaryFlag: number = -1;

  for (const str of s) {
    if (!curRow || curRow === numRows - 1) {
      boundaryFlag = -boundaryFlag;
    }

    strArr[curRow].push(str);
    curRow += boundaryFlag;
  }

  return strArr.map((row) => row.join("")).join("");
}
