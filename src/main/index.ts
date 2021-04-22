import AccountNumberReader from "./AccountNumberReader";
import AccountNumberParser from "./AccountNumberParser";

const filepath = process.argv[2];

if (!filepath) {
  throw new Error("filepath argument required");
}

const reader = new AccountNumberReader();
const parser = new AccountNumberParser();

const inputs = reader.readFileToInputs(filepath);

for (let input of inputs) {
  console.log(parser.parse(input));
}
