import * as fs from "fs";

export default class AccountNumberReader {
  read(filepath: string): string[] {
    return fs.readFileSync(filepath).toString().split("\n");
  }
}
