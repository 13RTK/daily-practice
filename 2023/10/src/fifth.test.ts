import { test, expect } from "bun:test";

export const mix = (s1: string, s2: string): string => {
    const resStrArr: string[] = [];
    const letterRegExp: RegExp = /[a-z]/;

    const s1FrequencyCnt: number[] = new Array(26).fill(0);
    const s2FrequencyCnt: number[] = new Array(26).fill(0);

    for (const str of s1) {
        if (!letterRegExp.test(str)) {
            continue;
        }

        s1FrequencyCnt[str.charCodeAt(0) - "a".charCodeAt(0)]++;
    }
    for (const str of s2) {
        if (!letterRegExp.test(str)) {
            continue;
        }
        s2FrequencyCnt[str.charCodeAt(0) - "a".charCodeAt(0)]++;
    }

    s1FrequencyCnt.forEach((cnt, idx) => {
        const s2Cnt: number = s2FrequencyCnt[idx];
        if (cnt <= 1 && s2Cnt <= 1) {
            return;
        }

        const curChar = String.fromCharCode(idx + "a".charCodeAt(0));
        const curCnt = Math.max(cnt, s2Cnt);

        let curStr: string = cnt === s2Cnt ? "=" : cnt < s2Cnt ? "2" : "1";
        curStr += `:${curChar.repeat(curCnt)}`;

        resStrArr.push(curStr);
    });

    resStrArr.sort((o1, o2) => {
        const o1Prefix: string = o1[0];
        const o2Prefix: string = o2[0];
        const o1Str: string = o1.split(":").pop() || "";
        const o2Str: string = o2.split(":").pop() || "";

        if (o1Str.length !== o2Str.length) {
            return o2Str.length - o1Str.length;
        }

        // console.log(`Current o1: ${o1}`);
        // console.log(`current o1 prefix: ${o1Prefix}`);
        // console.log(`Current o2: ${o2}`);
        // console.log(`current o2 prefix: ${o2Prefix}`);
        // console.log("=".repeat(20));
        if (o1Prefix !== o2Prefix) {
            // console.log("prefix::");
            return o1Prefix.charCodeAt(0) - o2Prefix.charCodeAt(0);
        }

        return o1Str.localeCompare(o2Str);
    });

    return resStrArr.join("/");
};

test("mix", () => {
    expect(mix("Are they here", "yes, they are here")).toBe(
        "2:eeeee/2:yy/=:hh/=:rr"
    );
    expect(
        mix("looping is fun but dangerous", "less dangerous than coding")
    ).toBe("1:ooo/1:uuu/2:sss/=:nnn/1:ii/2:aa/2:dd/2:ee/=:gg");
    expect(mix(" In many languages", " there's a pair of functions")).toBe(
        "1:aaa/1:nnn/1:gg/2:ee/2:ff/2:ii/2:oo/2:rr/2:ss/2:tt"
    );
});
