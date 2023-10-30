import { test, expect } from "bun:test";

export function sumOfIntervals(intervals: [number, number][]) {
    let resLen: number = 0;
    intervals.sort((o1, o2) => o1[0] - o2[0]);

    let leftBounday: number = intervals[0][0];
    let rightBounday: number = intervals[0][1];

    for (let idx = 1; idx < intervals.length; idx++) {
        const curInterval: number[] = intervals[idx];

        if (curInterval[0] <= rightBounday) {
            console.log("update!");
            rightBounday = Math.max(rightBounday, curInterval[1]);
        } else {
            resLen += rightBounday - leftBounday;
            leftBounday = curInterval[0];
            rightBounday = curInterval[1];
        }

        // console.log(`curInterval: ${curInterval}`);
        // console.log(`leftBounday: ${leftBounday}`);
        // console.log(`rightBounday: ${rightBounday}`);
        // console.log(`resLen: ${resLen}`);
        // console.log("=".repeat(20));
    }

    const lastInterval: number[] = intervals.at(-1) || [0, 0];

    resLen +=
        rightBounday >= lastInterval[1]
            ? rightBounday - leftBounday
            : lastInterval[1] - lastInterval[0];

    return resLen;
}

test("sumOfIntervals", () => {
    expect(sumOfIntervals([[1, 5]])).toBe(4);
    expect(
        sumOfIntervals([
            [1, 5],
            [6, 10],
        ])
    ).toBe(8);
    expect(
        sumOfIntervals([
            [1, 5],
            [1, 5],
        ])
    ).toBe(4);
    expect(
        sumOfIntervals([
            [1, 4],
            [7, 10],
            [3, 5],
        ])
    ).toBe(7);
    expect(sumOfIntervals([[-1e9, 1e9]])).toBe(2e9);
    expect(
        sumOfIntervals([
            [-435, -362],
            [-58, 185],
            [84, 304],
            [351, 495],
            [386, 438],
            [417, 466],
            [441, 488],
        ])
    ).toBe(579);
});
