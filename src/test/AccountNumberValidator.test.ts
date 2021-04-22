import AccountNumberValidator from "../main/AccountNumberValidator";

describe("Account Number Validator", () => {
  it("should identify a valid account number via checksum", () => {
    const validator = new AccountNumberValidator();
    expect(validator.validate(345882865)).toBeTruthy();
  });
  it("should identify an invalid account number via checksum", () => {
    const validator = new AccountNumberValidator();
    expect(validator.validate(345882866)).toBeFalsy();
  });
});
