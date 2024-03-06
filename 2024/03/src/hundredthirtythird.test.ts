function numIslands(grid: string[][]): number {
  let res: number = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      // Extend only the current land is not water(0)
      if (grid[row][col] == "1") {
        res++;
        countIsLand(grid, row, col);
      }
    }
  }

  return res;
}

// Extend to mark the whole island to avoid the repeat count
const countIsLand = (grid: string[][], row: number, col: number) => {
  if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length) {
    return;
  }

  if (grid[row][col] !== "1") {
    return;
  }

  grid[row][col] = "a";
  countIsLand(grid, row, col + 1);
  countIsLand(grid, row, col - 1);
  countIsLand(grid, row + 1, col);
  countIsLand(grid, row - 1, col);
};
