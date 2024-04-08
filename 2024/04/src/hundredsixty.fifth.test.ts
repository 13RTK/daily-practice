function longestCommonPrefix(strs: string[]): string {
  let res: string = strs[0];

  for (const str of strs) {
    for (let idx = 0; idx < Math.min(str.length, res.length); idx++) {
      if (res[idx] !== str[idx]) {
        res = res.slice(0, idx);
        break;
      }
    }

    if (str.length < res.length) {
      res = str;
    }
  }

  return res;
}
