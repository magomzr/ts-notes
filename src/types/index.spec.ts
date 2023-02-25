import { indexSignatures, logFunction, TYPES } from ".";

describe("Testing types", () => {
  test("Testing index signatures", () => {
    const expected: boolean = indexSignatures({
      "1": "smth",
      25: [1, 2, 3],
    });
    const expected2: boolean = indexSignatures();

    expect(expected).toBeTruthy();
    expect(expected2).toBeFalsy();
  });

  test("Testing enums", () => {
    const mustBeTwo = TYPES.NUMBER;

    expect(mustBeTwo).toBe(1);
  });

  test("Testing call signatures", () => {
    const expected: boolean = logFunction("Hello World!");
    const expected2: boolean = logFunction();

    expect(expected).toBeTruthy();
    expect(expected2).toBeFalsy();
  });
});
