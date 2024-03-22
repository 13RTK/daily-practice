function isIsomorphic(s: string, t: string): boolean {
  const strArr: string[] = s.split("");
  const targetArr: string[] = t.split("");

  for (const [idx, curStr] of strArr.entries()) {
    if (
      strArr.findIndex((str) => curStr === str) !==
      targetArr.findIndex((str) => t[idx] === str)
    ) {
      return false;
    }
  }

  return true;
}
