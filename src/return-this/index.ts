export class Server {
  private _isRunning: boolean;
  constructor() {
    this._isRunning = false;
  }

  async start() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    this._isRunning = true;
    return this;
  }

  check() {
    return this._isRunning;
  }
}
