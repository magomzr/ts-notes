import {
  JSONPlaceHolderUserType,
  UseCase,
  IGetter,
  IProcessor,
  HttpGetter,
  ConsoleProcessor,
} from ".";

describe("useCase pattern tests", () => {
  const mockUserData: JSONPlaceHolderUserType[] = [
    {
      id: 1,
      name: "Test User",
      username: "testuser",
      email: "test@example.com",
      address: {
        street: "Test St",
        suite: "1",
        city: "Test City",
        zipcode: "12345",
        geo: { lat: "0", lng: "0" },
      },
      phone: "1-234-567-8900",
      website: "test.com",
      company: {
        name: "Test Corp",
        catchPhrase: "Testing",
        bs: "test",
      },
    },
  ];

  class MockHttpGetter implements IGetter {
    async get<T>(): Promise<T[]> {
      return mockUserData as T[];
    }
  }

  class MockProcessor<T> implements IProcessor<T> {
    public processedData: T[] = [];
    process(info: T[]): void {
      this.processedData = info;
    }
  }

  it("should process data correctly", async () => {
    const mockGetter = new MockHttpGetter();
    const mockProcessor = new MockProcessor<JSONPlaceHolderUserType>();
    const useCase = new UseCase(mockGetter, mockProcessor);

    await useCase.run();

    expect(mockProcessor.processedData).toEqual(mockUserData);
    expect(mockProcessor.processedData[0].name).toBe("Test User");
  });

  it("should handle errors from getter", async () => {
    const errorGetter = new (class implements IGetter {
      async get<T>(): Promise<T[]> {
        throw new Error("Failed to fetch");
      }
    })();

    const mockProcessor = new MockProcessor<JSONPlaceHolderUserType>();
    const useCase = new UseCase(errorGetter, mockProcessor);

    await expect(useCase.run()).rejects.toThrow("Failed to fetch");
  });

  it("should fetch data from API", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([mockUserData]),
      })
    ) as jest.Mock;

    const getter = new HttpGetter("https://api.example.com");
    const result = await getter.get<JSONPlaceHolderUserType>();

    expect(result).toEqual([mockUserData]);
    expect(fetch).toHaveBeenCalledWith("https://api.example.com");

    jest.restoreAllMocks();
  });

  it("should log the provided information to the console", () => {
    const mockConsoleLog = jest.spyOn(console, "log").mockImplementation(() => {});
    const processor = new ConsoleProcessor<number>();
    const testData = [1, 2, 3];

    processor.process(testData);

    expect(mockConsoleLog).toHaveBeenCalledWith(testData);

    mockConsoleLog.mockRestore();
  });
});
