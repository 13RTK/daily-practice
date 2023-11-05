export function extraPerfect(n: number) {
    const resArr: number[] = [1];

    for (let idx = 2; idx <= n; idx++) {
        const curNumStr = idx.toString(2);

        if (curNumStr[0] === curNumStr[curNumStr.length - 1]) {
            resArr.push(idx);
        }
    }

    return resArr;
}
