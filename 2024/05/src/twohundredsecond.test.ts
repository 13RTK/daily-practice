function rotate(matrix: number[][]): void {
  // swap diagonal elements
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col <= row; col++) {
      [matrix[row][col], matrix[col][row]] = [
        matrix[col][row],
        matrix[row][col],
      ];
    }
  }

  // swap vertical(column)
  for (const row of matrix) {
    row.reverse();
  }
}
