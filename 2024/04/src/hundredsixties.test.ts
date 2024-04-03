/*
  1. traverse each string in the board to get the matched string(match the first letter)
  2. search to match the left letters once matched
*/
function exist(board: string[][], word: string): boolean {
  let ans = false;

  const rowLength = board.length;
  const colLength = board[0].length;
  const total = word.length;

  const searchWord = (row: number, col: number, matchCount: number) => {
    if (matchCount === total) {
      ans = true;
      return;
    }

    if (row >= rowLength || col >= colLength || row < 0 || col < 0) {
      return;
    }

    if (board[row][col] !== word[matchCount]) {
      return;
    }

    // Mark the visited string
    const pre = board[row][col];
    board[row][col] = "*";

    searchWord(row + 1, col, matchCount + 1);
    searchWord(row, col + 1, matchCount + 1);
    searchWord(row - 1, col, matchCount + 1);
    searchWord(row, col - 1, matchCount + 1);

    board[row][col] = pre;
  };

  for (let row = 0; row < rowLength; row++) {
    for (let col = 0; col < colLength; col++) {
      searchWord(row, col, 0);
    }
  }

  return ans;
}
