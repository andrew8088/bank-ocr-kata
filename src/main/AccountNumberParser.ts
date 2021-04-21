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
}
