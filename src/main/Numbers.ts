import AccountNumberInput from "./AccountNumberInput";

class Numbers {
  public static readonly DIGIT_WIDTH = 3;
  public static readonly 0: AccountNumberInput = [" _ ", "| |", "|_|", ""];
  public static readonly 1: AccountNumberInput = ["   ", "  |", "  |", ""];
  public static readonly 2: AccountNumberInput = [" _ ", " _|", "|_ ", ""];
  public static readonly 3: AccountNumberInput = [" _ ", " _|", " _|", ""];
  public static readonly 4: AccountNumberInput = ["   ", "|_|", "  |", ""];
  public static readonly 5: AccountNumberInput = [" _ ", "|_ ", " _|", ""];
  public static readonly 6: AccountNumberInput = [" _ ", "|_ ", "|_|", ""];
  public static readonly 7: AccountNumberInput = [" _ ", "  |", "  |", ""];
  public static readonly 8: AccountNumberInput = [" _ ", "|_|", "|_|", ""];
  public static readonly 9: AccountNumberInput = [" _ ", "|_|", " _|", ""];

  static concat(input: AccountNumberInput[]): AccountNumberInput {
    const [head, ...rest] = input;
    return head.map(
      (str, idx) => str + rest.map((arr) => arr[idx]).join("")
    ) as AccountNumberInput;
  }

  static print(input: AccountNumberInput) {
    console.log(input.join("\n"));
  }
}

export default Numbers;
