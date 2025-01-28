import { validator } from ".";
import { IUser } from "./interfaces";

describe("Testing validators", () => {
  test("Should return true", () => {
    const user: IUser = {
      id: 1,
      name: "John Doe",
      email: "john@doe.com",
      age: 30,
    };

    const userValidation = validator(user);

    expect(userValidation).toBe(true);
  });

  test("Should return false", () => {
    const userToFail: IUser = {
      id: 2,
      name: "A very very very long name",
      email: "email",
      age: -1,
    };

    const userToFailValidation = validator(userToFail);
    expect(userToFailValidation).toBe(false);
  });
});
