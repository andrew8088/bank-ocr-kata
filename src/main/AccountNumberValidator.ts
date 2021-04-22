const toDigitsArray = (num: string): number[] =>
  num.split("").map((x) => parseInt(x, 10));

const checksum = (nums: number[]): number =>
  nums.reverse().reduce((sum, digit, idx) => sum + digit * (idx + 1), 0) % 11;

export default class AccountNumberValidator {
  validate(accountNumber: string): boolean {
    //account number:  3  4  5  8  8  2  8  6  5
    //position names:  d9 d8 d7 d6 d5 d4 d3 d2 d1
    //(d1 + 2*d2 + 3*d3 +..+ 9*d9) mod 11 = 0
    return checksum(toDigitsArray(accountNumber)) === 0;
  }
}
