import AccountNumberParser from "../main/AccountNumberParser";
import AccountNumberReader from "../main/AccountNumberReader";

describe("Account Number Reader", () => {
  it("should read the file and convert it to an array of strings (one per line))", () => {
    const filepath = "./src/test/test-inputs/1.txt";
    const reader = new AccountNumberReader();
    const output = reader.read(filepath);
    expect(output).toEqual(["line1", "line2", "line3", ""]);
  });

  it("should throw an error if the file does not exist", () => {
    expect(() => {
      const reader = new AccountNumberReader();
      reader.read("no-file-exists");
    }).toThrow("ENOENT: no such file or directory, open 'no-file-exists'");
  });

  it("should split lines into AccountNumberInputs", () => {
    // closer to an integration test
    const reader = new AccountNumberReader();
    const parser = new AccountNumberParser();
    const inputs = reader.readFileToInputs("./src/test/test-inputs/2.txt");

    const actual = inputs.map((input) => parser.parse(input));
    const expected = [
      1234567890,
      1627384950,
      9087654321,
      8091236548,
      1111111111,
      8765543213,
      9090909090,
      4565456545,
      8881110000,
    ];

    expect(actual).toEqual(expected);

    // Easy way to create the test file:
    // console.log(
    //   expected
    //     .map((x) =>
    //       Numbers.concat(x.toString().split("").map((d) => Numbers[d])).join("\n")
    //     )
    //     .join("\n")
    // );
  });
});
