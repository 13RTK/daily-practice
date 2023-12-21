function evalRPN(tokens: string[]): number {
  const operators: string = "+-*/";
  const numStack: number[] = [];

  tokens.forEach((token) => {
    if (operators.includes(token)) {
      const numRight: number = numStack.pop()!;
      const numLeft: number = numStack.pop()!;

      numStack.push(execute(numLeft, numRight, token));
      return;
    }

    numStack.push(Number(token));
  });

  return numStack[0];
}

const execute = (
  numLeft: number,
  numRight: number,
  operator: string
): number => {
  switch (operator) {
    case "+":
      return numLeft + numRight;
    case "-":
      return numLeft - numRight;
    case "*":
      return numLeft * numRight;
    case "/":
      return Math.trunc(numLeft / numRight);
    default:
      throw new Error("Operator not match!");
  }
};
