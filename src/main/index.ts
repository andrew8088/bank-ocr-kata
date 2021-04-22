import AccountNumberReader from "./AccountNumberReader";
import AccountNumberParser from "./AccountNumberParser";
import AccountNumberReporter from "./AccountNumberReporter";

const filepath = process.argv[2];

if (!filepath) {
  throw new Error("filepath argument required");
}

const reader = new AccountNumberReader();
const parser = new AccountNumberParser();
const reporter = new AccountNumberReporter();

const inputs = reader.readFileToInputs(filepath);
const accountNumbers = inputs.map((input) => parser.parse(input));

console.log(reporter.report(accountNumbers));
