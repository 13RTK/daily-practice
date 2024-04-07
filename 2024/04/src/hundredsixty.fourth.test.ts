function romanToInt(s: string): number {
  let res: number = 0;

  for (const [idx, str] of s.split("").entries()) {
    if (idx === 0) {
      continue;
    }

    const preInt = romanStrToInt(s[idx - 1]);
    const curInt = romanStrToInt(str);

    if (preInt < curInt) {
      res -= preInt;
      continue;
    }

    res += preInt;
  }

  return res + romanStrToInt(s[s.length - 1]);
}

function romanStrToInt(str: string): number {
  switch (str) {
    case "I":
      return 1;
    case "V":
      return 5;
    case "X":
      return 10;
    case "L":
      return 50;
    case "C":
      return 100;
    case "D":
      return 500;
    case "M":
      return 1000;
    default:
      return 0;
  }
}
