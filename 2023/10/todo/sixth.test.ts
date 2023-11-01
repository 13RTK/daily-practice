export const calculate = (sum: string): string | number => {
    // TODO: https://www.codewars.com/kata/581bc0629ad9ff9873000316/train/typescript
    const regExp: RegExp = /[^0-9*$/+.]/;
    const numExp: RegExp = /[0-9]/;
    if (regExp.test(sum)) {
        return "400: Bad request";
    }

    const res: number = 0;
    for (const curChar of sum) {
        if (regExp.test(curChar)) {
        }
    }

    return "";
};
