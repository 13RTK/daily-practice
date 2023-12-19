function isValid(s: string): boolean {
    const stack: string[] = [];
    const strMap: Map<string, string> = new Map([
        [")", "("],
        ["}", "{"],
        ["]", "["],
    ]);

    s.split("").forEach((str, idx) => {
        if (idx === 0) {
            stack.push(str);
            return;
        }

        if (strMap.has(str) && stack.at(-1)! === strMap.get(str)) {
            stack.pop()!;
        } else {
            stack.push(str);
        }
    });

    return !stack.length;
}
