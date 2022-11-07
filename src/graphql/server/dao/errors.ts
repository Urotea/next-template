export class NotFoundError extends Error {
  constructor(message: string, cause?: Error) {
    super(message);
    this.name = "NotFoundError";
    this.cause = cause;
  }
}
