import { pipe } from ".";

describe("Testing utils", () => {
  test("Testing pipe method", () => {
    const getName = (person: any) => person.name;
    const toUpperCase = (str: string) => str.toUpperCase();
    const getFirstSixCharacters = (str: string) => str.substring(0, 6);
    const reverse = (str: string) => str.split("").reverse().join("");

    const result = pipe(
      getName,
      toUpperCase,
      getFirstSixCharacters,
      reverse
    )({ name: "buckethead" });

    expect(result).toBe("TEKCUB");
  });
});
