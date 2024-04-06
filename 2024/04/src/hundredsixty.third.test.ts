function minRemoveToMakeValid(s: string): string {
  const res: string[] = s.split("");
  const stack: number[] = [];

  for (let i = 0; i < s.length; i++) {
    const str: string = s[i];

    if (str === "(") {
      stack.push(i);
      continue;
    }

    if (str === ")") {
      if (stack.length && s[stack.at(-1)!] === "(") {
        stack.pop()!;
      } else {
        stack.push(i);
      }
    }
  }

  for (const idx of stack) {
    res[idx] = "";
  }

  return res.join("");
}
