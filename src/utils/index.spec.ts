import { pipe, wrapThrows, Result } from ".";

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

  test("Testing the wrapThrows method", () => {
    const divideByTwo = (num: number) => {
      if (num === 0) throw new Error("Cannot divide by zero");
      return num / 2;
    };

    const wrapped = wrapThrows(divideByTwo);
    const wrapped2 = wrapThrows(() => 2 + 2);

    const result1: Result<number> = wrapped(10);
    const result2: Result<number> = wrapped(0);
    const result3: Result<number> = wrapped2();

    expect(result1).toEqual({ ok: true, value: 5 });
    expect(result2).toEqual({ ok: false, error: new Error("Cannot divide by zero") });
    expect(result3).toEqual({ ok: true, value: 4 });
  });
});
