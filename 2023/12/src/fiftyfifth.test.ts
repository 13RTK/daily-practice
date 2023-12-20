function removeDuplicates(s: string): string {
    const stack: string[] = [];

    for (const str of s) {
        if (!stack.length) {
            stack.push(str);
            continue;
        }

        if (stack.at(-1) === str) {
            stack.pop()!;
        } else {
            stack.push(str);
        }
    }

    return stack.join("");
}
