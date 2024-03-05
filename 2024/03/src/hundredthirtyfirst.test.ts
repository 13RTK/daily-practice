function trap(height: number[]): number {
  let resVolume: number = 0;
  const idxStack: number[] = [];

  for (let i = 0; i < height.length; i++) {
    while (idxStack.length && height[idxStack.at(-1)!] < height[i]) {
      const pollIdx: number = idxStack.pop()!;

      if (idxStack.length) {
        const curHeight: number =
          Math.min(height[idxStack.at(-1)!], height[i]) - height[pollIdx];
        const curWeight = i - idxStack.at(-1)! - 1;

        resVolume += curHeight * curWeight;
      }
    }

    idxStack.push(i);
  }

  return resVolume;
}
