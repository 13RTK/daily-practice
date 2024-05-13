function matrixScore(grid: number[][]): number {
  const rowLength: number = grid.length;
  const colLength: number = grid[0].length;

  // get the sum which set all the most left column as bit
  let res: number = (1 << (colLength - 1)) * rowLength;

  // traverse all the column from 1 to end
  for (let col = 1; col < colLength; col++) {
    const curDigitMax: number = 1 << (colLength - 1 - col);
    let count: number = 0;

    // traverse all the cells to count cells with same bit
    for (let row = 0; row < rowLength; row++) {
      if (grid[row][col] === grid[row][0]) {
        count++;
      }
    }

    res += Math.max(count, rowLength - count) * curDigitMax;
  }

  return res;
}
