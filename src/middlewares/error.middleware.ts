import * as chalk from 'chalk';
import { NextFunction, Request, Response } from 'express';

import { config } from '../config';
import { HttpError } from '../errors/http-error';
import { InternalServerError } from '../errors/internal-server-error';

export const errorMiddleware = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
): void => {
  if (!config.server.isProduction) {
    console.log(chalk.red(err));
  }

  let httpError: HttpError;
  if (!(err instanceof HttpError)) {
    httpError = new InternalServerError();
  } else {
    httpError = err;
  }
  const { httpCode, message, errors } = httpError;

  res.status(httpCode);
  res.send({
    message,
    errors,
  });
};
