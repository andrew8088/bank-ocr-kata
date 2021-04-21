import AccountNumberParser from "../main/AccountNumberParser";

describe("AccountNumberParser", () => {
  it("should parse a single number", () => {
    const input = [["   "], ["  |"], ["  |"], [""]];

    const parser = new AccountNumberParser();

    expect(parser.parse(input)).toBe(1);
  });
});
