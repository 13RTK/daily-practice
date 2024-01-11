function solveNQueens(n: number): string[][] {
  const resArr: string[][] = [];
  const chessBoard: string[][] = Array.from({ length: n }, () =>
    new Array(n).fill(".")
  );

  const setQueens = (chessBoard: string[][], curRowNum: number): void => {
    if (curRowNum === chessBoard.length) {
      resArr.push(chessBoard.map((curRow: string[]) => curRow.join("")));
    }

    for (let curCol = 0; curCol < chessBoard.length; curCol++) {
      if (isCorrectPos(chessBoard, curRowNum, curCol)) {
        chessBoard[curRowNum][curCol] = "Q";

        setQueens(chessBoard, curRowNum + 1);

        chessBoard[curRowNum][curCol] = ".";
      }
    }
  };

  setQueens(chessBoard, 0);

  return resArr;
}

const isCorrectPos = (
  chessBoard: string[][],
  row: number,
  col: number
): boolean => {
  for (let curRow = row - 1; curRow >= 0; curRow--) {
    if (chessBoard[curRow][col] == "Q") {
      return false;
    }
  }

  for (
    let curRow = row - 1, curCol = col - 1;
    curRow >= 0 && curCol >= 0;
    curRow--, curCol--
  ) {
    if (chessBoard[curRow][curCol] == "Q") {
      return false;
    }
  }

  for (
    let curRow = row - 1, curCol = col + 1;
    curRow >= 0 && curCol < chessBoard.length;
    curRow--, curCol++
  ) {
    if (chessBoard[curRow][curCol] == "Q") {
      return false;
    }
  }

  return true;
};
