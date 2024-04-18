function islandPerimeter(grid: number[][]): number {
  let perimeter: number = 0;

  for (const [rowIdx, row] of grid.entries()) {
    for (const [colIdx, cell] of row.entries()) {
      if (cell) {
        perimeter += 4;

        if (rowIdx > 0 && grid[rowIdx - 1][colIdx]) {
          perimeter -= 2;
        }

        if (colIdx > 0 && grid[rowIdx][colIdx - 1]) {
          perimeter -= 2;
        }
      }
    }
  }

  return perimeter;
}
