import Hello from "../main/hello";

describe("Hello", () => {
  it("should greet someone by name", () => {
    const hello = new Hello();
    expect(hello.greet("Andrew")).toEqual("Hello Andrew");
  });
});
