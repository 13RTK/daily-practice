/*
  1. traverse each string in the board to get the matched string(match the first letter)
  2. search to match the left letters once matched
*/
function exist(board, word) {
    for (var rowIdx = 0; rowIdx < board.length; rowIdx++) {
        var row = board[rowIdx];
        for (var colIdx = 0; colIdx < row.length; colIdx++) {
            var str = row[colIdx];
            if (str === word[0]) {
                var searchResult = searchWord(board, word, rowIdx, colIdx, 0);
                if (searchResult) {
                    return true;
                }
            }
        }
    }
    return false;
}
function searchWord(board, word, row, col, matchCount) {
    if (row < 0 || row > board.length - 1 || col < 0 || col > board.length - 1) {
        return false;
    }
    if (matchCount === word.length) {
        return true;
    }
    if (board[row][col] !== word[matchCount]) {
        return false;
    }
    return (searchWord(board, word, row + 1, col + 1, matchCount + 1) ||
        searchWord(board, word, row + 1, col - 1, matchCount + 1) ||
        searchWord(board, word, row - 1, col - 1, matchCount + 1) ||
        searchWord(board, word, row - 1, col + 1, matchCount + 1));
}
var board = [
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"],
];
var word = "ABCCED";
exist(board, word);
