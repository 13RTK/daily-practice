function generate(numRows: number): number[][] {
  const result: number[][] = [];

  for (let i = 0; i < numRows; i++) {
    const row: number[] = new Array(i + 1).fill(1);

    for (let num = 1; num < i; num++) {
      row[num] = result[i - 1][num - 1] + result[i - 1][num];
    }

    result.push(row);
  }

  return result;
}
