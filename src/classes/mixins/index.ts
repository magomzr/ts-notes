type MixinType = new (...args: any[]) => {};

export function mixinFunction<C extends MixinType>(Class: C) {
  return class extends Class {
    constructor(...args: any[]) {
      super(...args);
    }

    returnsABoolean(): boolean {
      return true;
    }
  };
}
