import { hello } from "./hello-world";

describe("Hello World", () => {
  test("Say Hi!", () => {
    expect(hello()).toEqual("Hello, World!");
  });

  test("Hello Bob", () => {
    expect(hello("Bob")).toEqual("Hello, Bob");
  });

  test("Hello Pop!", () => {
    expect(hello("Pop!")).toEqual("Hello, Pop!");
  });
});
