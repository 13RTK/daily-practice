import { test, expect } from "bun:test";

export const scale = (s: string, k: number, n: number): string => {
    if (s === "") {
        return s;
    }

    let strArr: string[] = s.split("\n");
    const resArr: string[] = [];

    strArr = strArr.map((curStr) => {
        return curStr
            .split("")
            .map((curChar) => curChar.repeat(k))
            .join("");
    });
    // console.log(strArr);

    strArr.forEach((curStr) => {
        for (let i = 0; i < n; i++) {
            resArr.push(curStr);
        }
    });

    return resArr.join("\n");
};

test("scale", () => {
    // expect(scale("Kj\nSH", 1, 2)).toBe("Kj\nKj\nSH\nSH");
    expect(scale("abcd\nefgh\nijkl\nmnop", 2, 3)).toBe(
        "aabbccdd\naabbccdd\naabbccdd\neeffgghh\neeffgghh\neeffgghh\niijjkkll\niijjkkll\niijjkkll\nmmnnoopp\nmmnnoopp\nmmnnoopp"
    );
});
