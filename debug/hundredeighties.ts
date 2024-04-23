function convert(s: string, numRows: number): string {
  if (s.length === 1 || numRows === 1) {
    return s;
  }

  const strArr: string[][] = Array.from({ length: numRows }, () => []);
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

const s = "PAYPALISHIRING";
const numRows = 3;
convert(s, numRows);
