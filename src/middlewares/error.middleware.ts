import * as chalk from 'chalk';
import { NextFunction, Request, Response } from 'express';

import { config } from '../config';
import { HttpError } from '../errors/http-error';
import { InternalServerError } from '../errors/internal-server-error';

export const errorMiddleware = (
  error: Error,
  _request: Request,
  response: Response,
  _next: NextFunction
): void => {
  if (!config.server.isProduction) {
    console.log(chalk.red(error));
  }

  let httpError: HttpError;
  if (!(error instanceof HttpError)) {
    httpError = new InternalServerError();
  } else {
    httpError = error;
  }
  const { httpCode, message, errors } = httpError;

  response.status(httpCode);
  response.send({
    message,
    errors,
  });
};
