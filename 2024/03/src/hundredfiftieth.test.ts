function isLongPressedName(
  name: string,
  typed: string
): boolean {
  let nameIdx = 0;
  let typedIdx = 0;
  let nameLen = name.length;
  let typedLen = typed.length;

  while (nameIdx < nameLen && typedIdx < typedLen) {
    if (name[nameIdx] === typed[typedIdx]) {
      nameIdx++;
      typedIdx++;
    } else {
      if (typedIdx == 0) {
        return false;
      }

      // Skip duplicate character
      while (
        typedIdx < typedLen - 1 &&
        typed[typedIdx - 1] === typed[typedIdx]
      ) {
        typedIdx++;
      }

      if (name[nameIdx] !== typed[typedIdx]) {
        return false;
      } else {
        nameIdx++;
        typedIdx++;
      }
    }
  }

  if (nameIdx < nameLen) {
    return false;
  }

  while (typedIdx < typedLen) {
    if (typed[typedIdx] !== typed[typedIdx - 1]) {
      return false;
    }

    typedIdx++;
  }

  return true;
}
