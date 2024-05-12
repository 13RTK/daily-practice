function largestLocal(grid: number[][]): number[][] {
  const res: number[][] = [];

  for (let row = 1; row < grid.length - 1; row++) {
    const curRow: number[] = [];

    for (let col = 1; col < grid.length - 1; col++) {
      let curMax: number = 0;

      for (let curRow = row - 1; curRow <= row + 1; curRow++) {
        for (let curCol = col - 1; curCol <= col + 1; curCol++) {
          curMax = Math.max(curMax, grid[curRow][curCol]);
        }
      }

      curRow.push(curMax);
    }

    res.push(curRow);
  }

  return res;
}
