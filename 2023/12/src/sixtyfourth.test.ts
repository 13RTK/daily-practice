import { describe, expect, test } from "bun:test";

function reverseWords(s: string): string {
  const trimedStr: string = s.trim();

  const resArr = trimedStr
    .split(" ")
    .reverse()
    .filter((str) => str.trim().length);

  console.log(resArr);

  return resArr.join(" ");
}

describe("reverse words test", () => {
  test("reverse words test", () => {
    expect(reverseWords("  Bob    Loves  Alice   ")).toBe("Alice Loves Bob");
    expect(reverseWords("Alice does not even like bob")).toBe(
      "bob like even not does Alice"
    );
  });
});
