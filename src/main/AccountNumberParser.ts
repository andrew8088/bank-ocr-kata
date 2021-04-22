import AccountNumberInput from "./AccountNumberInput";
import * as R from "ramda";
import Numbers from "./Numbers";

export default class AccountNumberParser {
  parse(input: AccountNumberInput): number {
    for (let num of Object.keys(Numbers)) {
      if (R.equals(input, Numbers[num])) {
        return parseInt(num, 10);
      }
    }

    return 1;
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
