import AccountNumberReporter from "../main/AccountNumberReporter";

describe("Account Number Reporter", () => {
  it("prints a report for a list of account numbers", () => {
    const accountNumbers = ["457508000", "664371495", "86110??36"];

    const reporter = new AccountNumberReporter();

    expect(reporter.report(accountNumbers)).toBe(
      "457508000\n664371495 ERR\n86110??36 ILL"
    );
  });
});
