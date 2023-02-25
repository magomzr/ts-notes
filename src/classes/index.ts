//? Classes and interfaces
interface randomInterface {
  _id: number;
  returnsABoolean: (id: number) => boolean;
}

export class RandomClassWithInterface implements randomInterface {
  readonly _id: number;
  constructor(id: number) {
    this._id = id;
  }

  returnsABoolean(id?: number) {
    return id ? true : false;
  }
}

//? Private, protected, readonly

export class ClassWithModifiers {
  public id: string;
  private _id: string;
  protected $id: string;

  constructor() {
    this.id = "Hello, World!";
    this._id = "Hello, Private World!";
    this.$id = "Hello, Protected World!";
  }

  get getPublicId(): string {
    return this.id;
  }

  get getPrivateId(): string {
    return this._id;
  }

  get getProtectedId(): string {
    return this.$id;
  }
}

//? Builder design pattern

export type Type = 1 | 2 | null;
type Data = object | null;
type Version = string | null;

export class BuilderClass {
  private type: Type;
  private data: Data;
  private version: Version;

  constructor() {
    this.type = null;
    this.data = null;
    this.version = null;
  }

  setType(t: Type) {
    this.type = t;
    return this;
  }

  setData(d: Data) {
    this.data = d;
    return this;
  }

  setVersion(v: Version) {
    this.version = v;
    return this;
  }

  build() {
    return this;
  }

  public get getType(): number | null {
    return this.type;
  }

  public get getData(): object | null {
    return this.data;
  }

  public get getVersion(): string | null {
    return this.version;
  }
}
