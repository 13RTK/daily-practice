function intToRoman(num: number): string {
  const result: string[] = [];
  let division: number = 10;

  while (Math.trunc(num / division) > 0) {
    division *= 10;
  }
  division = Math.trunc(division / 10);

  while (division > 0) {
    const test: number = Math.trunc(num / division);

    if (test > 0) {
      result.push(getRomanChar(test, division));
    }

    num %= division;
    division = Math.trunc(division / 10);
  }

  return result.join("");
}

function getRomanChar(testNum: number, digit: number): string {
  if (digit == 1) {
    const romanChar: string[] = [
      "I",
      "II",
      "III",
      "IV",
      "V",
      "VI",
      "VII",
      "VIII",
      "IX",
    ];
    return romanChar[testNum - 1];
  }

  if (digit == 10) {
    const romanChar: string[] = [
      "X",
      "XX",
      "XXX",
      "XL",
      "L",
      "LX",
      "LXX",
      "LXXX",
      "XC",
    ];
    return romanChar[testNum - 1];
  }

  if (digit == 100) {
    const romanChar: string[] = [
      "C",
      "CC",
      "CCC",
      "CD",
      "D",
      "DC",
      "DCC",
      "DCCC",
      "CM",
    ];
    return romanChar[testNum - 1];
  } else {
    const romanChar: string[] = ["M", "MM", "MMM"];
    return romanChar[testNum - 1];
  }
}
