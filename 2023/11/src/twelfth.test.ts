function twoSum(nums: number[], target: number): number[] {
    const numIdxMap: Map<number, number> = new Map();

    for (const [idx, curNum] of nums.entries()) {
        const curDiff: number = target - curNum;

        if (numIdxMap.has(curDiff)) {
            return [idx, numIdxMap.get(curDiff) || 0];
        }

        numIdxMap.set(curNum, idx);
    }

    return [-1, -1];
}
