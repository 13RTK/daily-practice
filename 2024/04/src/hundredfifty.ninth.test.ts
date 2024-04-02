function isValid(s: string): boolean {
  const bracesMap: Map<string, string> = new Map([
    [")", "("],
    ["}", "{"],
    ["]", "["],
  ]);

  const stack: string[] = [];
  for (const str of s) {
    if (stack.length && bracesMap.has(str)) {
      if (bracesMap.get(str) === stack.at(-1)) {
        stack.pop();
        continue;
      }
    }

    stack.push(str);
  }

  return stack.length === 0;
}
