import { Server } from ".";

describe("Server", () => {
  it("should modify variables without assignation", async () => {
    const server = new Server();

    expect(server.check()).toBeFalsy();

    await server.start();

    expect(server.check()).toBeTruthy();
  });
});
