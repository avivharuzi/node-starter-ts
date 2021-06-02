import { StatusCodes } from 'http-status-codes';

import { defaultErrorMessages } from './default-error-messages';
import { HttpError } from './http-error';

export class BadRequest extends HttpError {
  constructor(message?: string, errors: any[] = []) {
    super(
      StatusCodes.BAD_REQUEST,
      message ?? defaultErrorMessages.badRequest,
      errors
    );
  }
}
