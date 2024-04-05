function makeGood(s: string): string {
  const stack: string[] = [];

  for (const [_idx, str] of s.split("").entries()) {
    if (stack.length) {
      const topStr: string = stack.at(-1)!;

      if (topStr.toLowerCase() === str.toLowerCase() && topStr !== str) {
        stack.pop();
        continue;
      }
    }

    stack.push(str);
  }

  return stack.join("");
}
