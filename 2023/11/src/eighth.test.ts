export const strongNumber = (num: number): string => {
    const factorialSum: number[] = new Array(10).fill(0);
    factorialSum[1] = 1;

    for (let idx = 2; idx < 10; idx++) {
        factorialSum[idx] = factorialSum[idx - 1] * idx;
    }

    const facorialDigitSum = num
        .toString()
        .split("")
        .reduce((acc, val) => {
            const curDigit: number = val.charCodeAt(0) - "0".charCodeAt(0);

            return acc + factorialSum[curDigit];
        }, 0);

    return facorialDigitSum === num ? "STRONG!!!!" : "Not Strong !!";
};
