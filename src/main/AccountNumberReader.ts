import * as fs from "fs";
import AccountNumberInput from "./AccountNumberInput";

export default class AccountNumberReader {
  read(filepath: string): string[] {
    return fs.readFileSync(filepath).toString().split("\n");
  }

  readFileToInputs(filepath: string): AccountNumberInput[] {
    const lines = this.read(filepath);
    const inputs: AccountNumberInput[] = [];

    for (let i = 0; i < lines.length; i += 4) {
      inputs.push([lines[i], lines[i + 1], lines[i + 2]]);
    }
    return inputs;
  }
}
