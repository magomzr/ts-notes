import { mixinFunction } from ".";

describe("Testing classes", () => {
  test("Testing mixins", () => {
    class randomClass {
      constructor() {}
    }

    const newRandomClass = mixinFunction(randomClass); // Mixin type
    const expectedClass = new newRandomClass();
    const expected: boolean = expectedClass.returnsABoolean();

    expect(expected).toBeTruthy();
  });
});
