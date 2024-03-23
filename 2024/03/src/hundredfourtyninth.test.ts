function commonChars(words: string[]): string[] {
  const resList: string[] = [];

  const charFrequence: number[] = new Array(26).fill(0);
  for (const curChar of words[0]) {
    charFrequence[
      curChar.charCodeAt(0) - "a".charCodeAt(0)
    ]++;
  }

  for (let strIdx = 1; strIdx < words.length; strIdx++) {
    const curStr: string = words[strIdx];

    const curFrequence: number[] = new Array(26).fill(0);
    for (const curChar of curStr) {
      curFrequence[
        curChar.charCodeAt(0) - "a".charCodeAt(0)
      ]++;
    }

    for (let i = 0; i < 26; i++) {
      charFrequence[i] = Math.min(
        charFrequence[i],
        curFrequence[i]
      );
    }
  }

  for (let i = 0; i < 26; i++) {
    while (charFrequence[i] > 0) {
      charFrequence[i]--;
      resList.push(
        String.fromCharCode(i + "a".charCodeAt(0))
      );
    }
  }

  return resList;
}
