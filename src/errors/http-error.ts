export class HttpError extends Error {
  httpCode: number;
  errors: any[];

  constructor(httpCode: number, message: string, errors = []) {
    super(message);
    this.httpCode = httpCode;
    this.errors = errors;
  }
}
