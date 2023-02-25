import {
  arrowFuncParam,
  filterFromScratch,
  MapFromScratch,
  potenciar,
  times,
} from ".";

describe("Testing functions", () => {
  test("Testing arrow funcs as params", () => {
    let randomStringArr: string[] = ["ran", "dom"];
    const expected: boolean = arrowFuncParam(randomStringArr, (x: string) => {
      console.log(x);
    });

    const timesExpected: void = times((n: number) => {
      console.log(n);
    }, 3);

    expect(expected).toBeTruthy();
    expect(timesExpected).toBeUndefined();
  });

  test("Testing .filter()", () => {
    const expected: number[] = filterFromScratch(
      [1, 2, 3],
      (x: number) => x > 2
    );
    const expected2: string[] = filterFromScratch(
      ["a", "b", "c"],
      (x: string) => x !== "b"
    );
    const expected3: object[] = filterFromScratch(
      [{ firstName: "Beth" }, { firstName: "Caithlyn" }, { firstName: "Xin" }],
      (x: { firstName: string }) => x.firstName.startsWith("B")
    );

    expect(expected).toEqual([3]);
    expect(expected2).toEqual(["a", "c"]);
    expect(expected3).toEqual([
      {
        firstName: "Beth",
      },
    ]);
  });

  test("Testing .map()", () => {
    let numbArr: number[] = MapFromScratch([1, 2, 3], (x: number) => {
      return x + 1; // Debe tener return puesto que estamos usando curly braces, que requieren un return.
    });

    expect(numbArr).toEqual([2, 3, 4]);

    const strArr: string[] = MapFromScratch(["a", "b", "c"], (x: string) => {
      return x + "x"; // Debe tener return puesto que estamos usando curly braces, que requieren un return.
    });

    expect(strArr).toEqual(["ax", "bx", "cx"]);
  });

  test("Testing Spread Operator", () => {
    const randomObj = {
      id: 1,
      tkt: "a1-b2-c3",
    };

    const anotherRandomObj = {
      dateAt: "01-01-2000",
      ...randomObj,
    };

    expect(anotherRandomObj).toEqual({
      id: 1,
      tkt: "a1-b2-c3",
      dateAt: "01-01-2000",
    });
  });

  test("Testing Rest Parameters", () => {
    const expected: number[] = potenciar(2, 1, 2, 3, 4, 5);

    expect(expected).toEqual([1, 4, 9, 16, 25]);
  });
});
