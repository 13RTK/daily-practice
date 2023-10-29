export function calcType(a: number, b: number, res: number): string {
    const resMap: Map<number, string> = new Map([
        [a + b, "addition"],
        [a * b, "multiplication"],
        [a - b, "substraction"],
        [a / b, "division"],
    ]);

    return resMap.get(res) || "";
}
