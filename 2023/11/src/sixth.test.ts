export function change(string: string): string {
    const resStrArr = new Array(26).fill("0");
    const letterRegexp: RegExp = /[A-Z]/;

    const upperCaseStr = string.toUpperCase();
    for (const curStr of upperCaseStr) {
        if (letterRegexp.test(curStr)) {
            const curStrIdx: number = curStr.charCodeAt(0) - "A".charCodeAt(0);

            resStrArr[curStrIdx] = "1";
        }
    }

    return resStrArr.join("");
}
