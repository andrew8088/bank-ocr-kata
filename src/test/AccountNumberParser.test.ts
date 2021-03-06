import AccountNumberInput from "../main/AccountNumberInput";
import AccountNumberParser from "../main/AccountNumberParser";
import Numbers from "../main/Numbers";

describe("AccountNumberParser", () => {
  it.each([
    ["0", Numbers["0"]],
    ["1", Numbers["1"]],
    ["2", Numbers["2"]],
    ["3", Numbers["3"]],
    ["4", Numbers["4"]],
    ["5", Numbers["5"]],
    ["6", Numbers["6"]],
    ["7", Numbers["7"]],
    ["8", Numbers["8"]],
    ["9", Numbers["9"]],
  ])(
    "should parse an individual %s",
    (output: string, input: AccountNumberInput) => {
      const parser = new AccountNumberParser();
      expect(parser.parse(input)).toBe(output);
    }
  );

  it.each([
    [[Numbers["1"], Numbers["0"]]],
    [[Numbers["2"], Numbers["3"]]],
    [[Numbers["4"], Numbers["5"]]],
    [[Numbers["6"], Numbers["7"]]],
    [[Numbers["8"], Numbers["9"]]],
  ])(
    "should separate an input with multiple numbers into individual numbers",
    (inputs: AccountNumberInput[]) => {
      const input = Numbers.concat(inputs);
      // Numbers.print(input);
      const parser = new AccountNumberParser();
      expect(parser.separate(input)).toEqual(inputs);
    }
  );

  it.each([
    [
      "1234567890",
      Numbers.concat([
        Numbers["1"],
        Numbers["2"],
        Numbers["3"],
        Numbers["4"],
        Numbers["5"],
        Numbers["6"],
        Numbers["7"],
        Numbers["8"],
        Numbers["9"],
        Numbers["0"],
      ]),
    ],
    [
      "9087654321",
      Numbers.concat([
        Numbers["9"],
        Numbers["0"],
        Numbers["8"],
        Numbers["7"],
        Numbers["6"],
        Numbers["5"],
        Numbers["4"],
        Numbers["3"],
        Numbers["2"],
        Numbers["1"],
      ]),
    ],
  ])(
    "should parse a nine digit account number (%s))",
    (output: string, input: AccountNumberInput) => {
      const parser = new AccountNumberParser();
      expect(parser.parse(input)).toBe(output);
    }
  );

  it('should parse illegible digits as "?"', () => {
    const parser = new AccountNumberParser();
    expect(parser.parse(["|_ ", "|  ", "   "])).toBe("?");
  });

  it.each([
    ["1?0", [Numbers["1"], ["|  ", " | ", "  |"], Numbers["0"]]],
    ["?23", [["_  ", " _ ", "  _"], Numbers["2"], Numbers["3"]]],
    ["45?", [Numbers["4"], Numbers["5"], ["_|_", "   ", "|_|"]]],
  ])(
    "should parse illegible digits as '?'",
    (output: string, inputs: AccountNumberInput[]) => {
      const input = Numbers.concat(inputs);
      // Numbers.print(input);
      const parser = new AccountNumberParser();
      expect(parser.parse(input)).toEqual(output);
    }
  );
});
