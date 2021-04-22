import AccountNumberInput from "./AccountNumberInput";
import * as R from "ramda";
import Numbers from "./Numbers";

export default class AccountNumberParser {
  parse(input: AccountNumberInput): string {
    const inputDigits = this.separate(input);
    let accountNumber = "";

    for (const inputDigit of inputDigits) {
      const num = Object.keys(Numbers).filter((num) =>
        R.equals(inputDigit, Numbers[num])
      )[0];

      accountNumber += num || "?";
    }

    return accountNumber;
  }

  separate(input: AccountNumberInput): AccountNumberInput[] {
    const outputs: AccountNumberInput[] = [];

    for (let i = 0; (i + 1) * Numbers.DIGIT_WIDTH <= input[0].length; i++) {
      if (!outputs[i]) outputs[i] = ([] as unknown) as AccountNumberInput;
      const start = i * Numbers.DIGIT_WIDTH;
      const end = (i + 1) * Numbers.DIGIT_WIDTH;
      for (const line of input) {
        outputs[i].push(line.slice(start, end));
      }
    }

    return outputs;
  }
}
