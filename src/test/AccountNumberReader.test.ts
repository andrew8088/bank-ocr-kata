import AccountNumberReader from "../main/AccountNumberReader";

describe("Account Number Reader", () => {
  it("should read the file and convert it to an array of strings (one per line))", () => {
    const filepath = "./src/test/test-inputs/1.txt";
    const reader = new AccountNumberReader();
    const output = reader.read(filepath);
    expect(output).toEqual(["line1", "line2", "line3", "line4", ""]);
  });

  it("should throw an error if the file does not exist", () => {
    expect(() => {
      const reader = new AccountNumberReader();
      const output = reader.read("no-file-exists");
    }).toThrow("ENOENT: no such file or directory, open 'no-file-exists'");
  });
});
