import {
  indexSignatures,
  logFunction,
  TYPES,
  TObject,
  TAny,
  ObligatoriosTodos,
  ConLosSiguientesOpcionales,
  DeepPartial,
  DeepPartialWithArrays,
} from ".";

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

  test("Testing utility types", () => {
    const recordObject: TObject = {
      whatever: () => {
        return "works here";
      },
    };

    const idxSignatureObject: TAny = {
      mustBeNumber: 1,
    };

    const obligatorios: ObligatoriosTodos = {
      id: 1,
      nombre: "Juan",
      apellido: "Perez",
      email: "juan.perez@dummy.com",
    };

    const opcionalSinApellido: ConLosSiguientesOpcionales<ObligatoriosTodos, "apellido"> = {
      id: 1,
      nombre: "Juan",
      email: "juan.perez@dummy.com",
    };

    expect(recordObject.whatever()).toBe("works here");
    expect(idxSignatureObject.mustBeNumber).toBe(1);
    expect(obligatorios).toEqual({
      id: 1,
      nombre: "Juan",
      apellido: "Perez",
      email: "juan.perez@dummy.com",
    });
    expect(opcionalSinApellido.apellido).toBeUndefined();
  });

  test("Testing DeepPartial type with simple object", () => {
    type User = {
      id: number;
      name: string;
      age: number;
    };

    const user: User = {
      id: 1,
      name: "John Doe",
      age: 30,
    };

    const userPartial: DeepPartial<User> = {
      age: 30,
    };

    expect(userPartial).toEqual({ age: 30 });
  });

  test("Testing DeepPartial type with nested object", () => {
    type User = {
      id: number;
      name: string;
      age: number;
      address: {
        street: string;
        city: string;
      };
    };

    const user: User = {
      id: 1,
      name: "John Doe",
      age: 30,
      address: {
        street: "1234 Main St",
        city: "Springfield",
      },
    };

    const userPartial: DeepPartial<User> = {
      address: {
        city: "Shelbyville",
      },
    };

    expect(userPartial).toEqual({
      address: {
        city: "Shelbyville",
      },
    });
  });

  test("Testing DeepPartial type with array", () => {
    type User = {
      id: number;
      name: string;
      age: number;
      friends: { name: string; age: number }[];
    };

    const user: User = {
      id: 1,
      name: "John Doe",
      age: 30,
      friends: [
        { name: "Jane Doe", age: 30 },
        { name: "Alice Smith", age: 30 },
      ],
    };

    const userPartial: DeepPartialWithArrays<User> = {
      friends: [{ age: 30 }],
    };

    expect(userPartial).toEqual({
      friends: [{ age: 30 }],
    });
  });
});
