import { StatusCodes } from 'http-status-codes';

import { defaultErrorMessages } from './default-error-messages';
import { HttpError } from './http-error';

export class InternalServerError extends HttpError {
  constructor(message?: string) {
    super(
      StatusCodes.INTERNAL_SERVER_ERROR,
      message ?? defaultErrorMessages.internalServerError
    );
  }
}
