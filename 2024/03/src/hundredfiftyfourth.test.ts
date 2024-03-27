function balancedStringSplit(s: string): number {
  let counter: number = 0;
  let resCounter: number = 0;

  for (const str of s) {
    if (str === "R") {
      counter++;
    } else {
      counter--;
    }

    if (!counter) {
      resCounter++;
    }
  }

  return resCounter;
}
