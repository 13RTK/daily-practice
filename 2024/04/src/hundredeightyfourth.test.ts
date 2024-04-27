function maxArea(height: number[]): number {
  let resArea: number = 0;
  let leftIdx = 0;
  let rightIdx = height.length - 1;

  while (leftIdx < rightIdx) {
    resArea = Math.max(
      resArea,
      Math.min(height[leftIdx], height[rightIdx]) * (rightIdx - leftIdx)
    );

    if (height[leftIdx] < height[rightIdx]) {
      leftIdx++;
    } else {
      rightIdx--;
    }
  }

  return resArea;
}
