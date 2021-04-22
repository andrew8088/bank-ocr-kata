import AccountNumberValidator from "./AccountNumberValidator";

export default class AccountNumberReporter {
  private validator = new AccountNumberValidator();
  report(accountNumbers: string[]): string {
    return accountNumbers
      .map((accountNumber) => {
        if (accountNumber.includes("?")) {
          return `${accountNumber} ILL`;
        }
        if (this.validator.validate(accountNumber)) {
          return accountNumber;
        }
        return `${accountNumber} ERR`;
      })
      .join("\n");
  }
}
