import {
  pipe,
  wrapThrows,
  Result,
  memoize,
  memoizeAsync,
  objectToTestDestructuringWithSpreadOperator,
} from ".";

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

  test("Testing the memoize method", () => {
    // Example
    const slowFunction = (num: number) => {
      let result = 0;
      for (let i = 0; i < num; i++) {
        result += i;
      }
      return result;
    };

    const fastFunction = memoize(slowFunction);

    const result1 = fastFunction(100);
    const result2 = fastFunction(100);

    expect(result1).toBe(result2);
  });

  test("Testing the memoizeAsync method", async () => {
    // Example
    const slowAsyncFunction = async (start: number, end: number) => {
      let result = 0;
      for (let i = start; i < end; i++) {
        result += await Promise.resolve(i);
      }
      return result;
    };

    const fastAsyncFunction = memoizeAsync(slowAsyncFunction);

    const result1 = await fastAsyncFunction(0, 100);
    const result2 = await fastAsyncFunction(0, 100);

    expect(result1).toBe(result2);
  });

  test("Testing objectToTestDestructuringWithSpreadOperator method", () => {
    const { name, age, country, ...restOfTheObjectWithAnyName } =
      objectToTestDestructuringWithSpreadOperator;

    expect(name).toBe("John Doe");
    expect(age).toBe(30);
    expect(country).toBe("Spain");

    expect(restOfTheObjectWithAnyName).toEqual({
      city: "Madrid",
      job: "Developer",
      hobbies: ["reading", "music", "sports"],
    });
  });
});
