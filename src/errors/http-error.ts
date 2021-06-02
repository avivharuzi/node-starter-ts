export class HttpError extends Error {
  httpCode: number;
  errors: any[];

  constructor(httpCode: number, message: string, errors: any[] = []) {
    super(message);
    this.httpCode = httpCode;
    this.errors = errors;
  }
}
