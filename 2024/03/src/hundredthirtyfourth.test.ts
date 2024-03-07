function maxAreaOfIsland(grid: number[][]): number {
  let res: number = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] == 1) {
        res = Math.max(res, getArea(grid, row, col));
      }
    }
  }

  return res;
}

const getArea = (grid: number[][], row: number, col: number): number => {
  if (
    row < 0 ||
    row > grid.length - 1 ||
    col < 0 ||
    col > grid[0].length - 1 ||
    grid[row][col] == 0
  ) {
    return 0;
  }
  grid[row][col] = 0;

  return (
    getArea(grid, row + 1, col) +
    getArea(grid, row, col + 1) +
    getArea(grid, row - 1, col) +
    getArea(grid, row, col - 1) +
    1
  );
};
