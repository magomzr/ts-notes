export interface IGetter {
  get<T>(): Promise<T[]>;
}

export interface IProcessor<T> {
  process(info: T[]): void;
}

export class UseCase<T> {
  private readonly _getter: IGetter;
  private readonly _processor: IProcessor<T>;

  constructor(getter: IGetter, processor: IProcessor<T>) {
    this._getter = getter;
    this._processor = processor;
  }

  async run() {
    const info: T[] = await this._getter.get<T>();
    this._processor.process(info);
  }
}

export type JSONPlaceHolderUserType = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export class HttpGetter implements IGetter {
  private readonly _url: string;

  constructor(url: string) {
    this._url = url;
  }

  async get<T>(): Promise<T[]> {
    return (await fetch(this._url).then((res) => res.json())) as T[];
  }
}

export class ConsoleProcessor<T> implements IProcessor<T> {
  process(info: T[]): void {
    console.log(info);
  }
}
