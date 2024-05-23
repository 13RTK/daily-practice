function generateParenthesis(n: number): string[] {
  const resList: string[] = [];
  const curParenthesis: string[] = [];

  function getParenthesis(
    target: number,
    leftCount: number,
    rightCount: number
  ): void {
    if (leftCount === target && rightCount === target) {
      resList.push(curParenthesis.join(""));
      return;
    }

    if (leftCount < target) {
      curParenthesis.push("(");

      getParenthesis(target, leftCount + 1, rightCount);

      curParenthesis.pop();
    }

    if (rightCount < leftCount) {
      curParenthesis.push(")");

      getParenthesis(target, leftCount, rightCount + 1);

      curParenthesis.pop();
    }
  }

  getParenthesis(n, 0, 0);
  return resList;
}
