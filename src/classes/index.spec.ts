import {
  BuilderClass,
  ClassWithModifiers,
  RandomClassWithInterface,
  Type,
} from ".";

describe("Testing classes", () => {
  test("Testing classes and interfaces", () => {
    const id: number = 25;
    const TestClass = new RandomClassWithInterface(id);
    const expectedTrue: boolean = TestClass.returnsABoolean(id);
    const expectedFalse: boolean = TestClass.returnsABoolean();

    expect(expectedTrue).toBeTruthy();
    expect(expectedFalse).toBeFalsy();
  });

  test("Testing access modifiers", () => {
    const ClassToTest = new ClassWithModifiers();

    expect(ClassToTest.getPublicId).toEqual("Hello, World!");
    expect(ClassToTest.getPrivateId).toEqual("Hello, Private World!");
    expect(ClassToTest.getProtectedId).toEqual("Hello, Protected World!");
  });

  test("Testing builder design pattern", () => {
    const data: object = { data: "dummy" };
    const version: string = "v.1.0";
    const type: Type = 1;

    const ClassToBuild = new BuilderClass()
      .setData(data)
      .setType(type)
      .setVersion(version)
      .build();

    expect(ClassToBuild).toBeInstanceOf(BuilderClass);
    expect(ClassToBuild.getData).toEqual(data);
    expect(ClassToBuild.getVersion).toEqual(version);
    expect(ClassToBuild.getType).toEqual(type);
  });
});
