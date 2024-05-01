function reversePrefix(word: string, ch: string): string {
  if (!word.includes(ch)) {
    return word;
  }

  const wordArr: string[] = word.split("");
  const endIdx: number = wordArr.findIndex((str) => str === ch);

  return [
    ...wordArr.slice(0, endIdx + 1).reverse(),
    ...wordArr.slice(endIdx + 1),
  ].join("");
}
