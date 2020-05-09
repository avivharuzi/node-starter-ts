export class ResponseError {
  statusCode: number;
  message: string;
  errors: [];

  constructor({ statusCode, message }: { statusCode: number, message: string }, errors: [] = []) {
    this.statusCode = statusCode;
    this.message = message;
    this.errors = errors;
  }
}
