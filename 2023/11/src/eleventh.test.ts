import { test, expect } from "bun:test";

export function thirt(n: number): number {
    let curSumProduct: number = sumProduct(n);

    while (curSumProduct !== n) {
        n = curSumProduct;
        curSumProduct = sumProduct(n);
    }

    return n;
}

const sumProduct = (num: number): number => {
    const reminderArr: number[] = [1, 10, 9, 12, 3, 4];

    return num
        .toString()
        .split("")
        .reverse()
        .reduce((acc, val, idx) => {
            const curIdx: number = idx % reminderArr.length;

            return acc + Number.parseInt(val) * reminderArr[curIdx];
        }, 0);
};

test("thirt", () => {
    expect(thirt(1234567)).toBe(87);
    expect(thirt(8529)).toBe(79);
    expect(thirt(85299258)).toBe(31);
});
