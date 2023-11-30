function maxArea(height: number[]): number {
    let resArea: number = 0;
    let leftIdx: number = 0;
    let rightIdx: number = height.length - 1;

    while (leftIdx < rightIdx) {
        const curArea: number =
            (rightIdx - leftIdx) * Math.min(height[leftIdx], height[rightIdx]);
        resArea = Math.max(resArea, curArea);

        if (height[leftIdx] < height[rightIdx]) {
            leftIdx++;
        } else {
            rightIdx--;
        }
    }

    return resArea;
}
