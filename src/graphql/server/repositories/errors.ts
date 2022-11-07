export class ServiceError extends Error {
  constructor(message: string, cause?: Error) {
    super(message);
    this.name = "ServiceError";
    this.cause = cause;
  }
}
