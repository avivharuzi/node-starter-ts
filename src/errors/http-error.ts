export class HttpError extends Error {
  httpCode: number;
  errors: any[];

  constructor(httpCode: number, message: string, errors: any[] = []) {
    super(message);
    Object.setPrototypeOf(this, HttpError.prototype);
    this.httpCode = httpCode;
    this.errors = errors;
  }
}
