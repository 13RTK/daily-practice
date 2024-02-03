function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  const pathCnt: number[][] = Array.from({ length: obstacleGrid.length }, () =>
    new Array(obstacleGrid[0].length).fill(0)
  );

  for (let curRow = 0; curRow < obstacleGrid.length; curRow++) {
    if (obstacleGrid[curRow][0] == 1) {
      break;
    }
    pathCnt[curRow][0] = 1;
  }

  for (let curCol = 0; curCol < obstacleGrid[0].length; curCol++) {
    if (obstacleGrid[0][curCol] == 1) {
      break;
    }
    pathCnt[0][curCol] = 1;
  }

  for (let curRow = 1; curRow < obstacleGrid.length; curRow++) {
    for (let curCol = 1; curCol < obstacleGrid[0].length; curCol++) {
      if (obstacleGrid[curRow][curCol] == 1) {
        continue;
      }
      pathCnt[curRow][curCol] =
        pathCnt[curRow - 1][curCol] + pathCnt[curRow][curCol - 1];
    }
  }

  return pathCnt[pathCnt.length - 1][pathCnt[0].length - 1];
}
