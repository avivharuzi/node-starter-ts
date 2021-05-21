import * as chalk from 'chalk';
import * as httpMethods from 'http-methods-constants';
import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';

import config from './../config';
import errors from './../errors';
import { ResponseError } from '../modules/Shared/ResponseError';

export default () => (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  // eslint-disable-next-line
  res.locals.success = (data: any): void => {
    let statusCode: number;

    switch (req.method) {
      case httpMethods.DELETE:
        statusCode = StatusCodes.NO_CONTENT;
        break;
      case httpMethods.GET:
      case httpMethods.PATCH:
      case httpMethods.PUT:
        statusCode = StatusCodes.OK;
        break;
      case httpMethods.POST:
        statusCode = StatusCodes.CREATED;
        break;
      default:
        statusCode = StatusCodes.OK;
        break;
    }

    res.status(statusCode);

    res.send(data);
  };

  // eslint-disable-next-line
  res.locals.error = (err: any): void => {
    if (!config.server.isProduction) {
      console.log(
        chalk.red(
          `Error occurred in request process, err: ${JSON.stringify(err)}`
        )
      );
    }

    let responseError: ResponseError;

    if (!err || err.constructor.name !== 'ResponseError') {
      responseError = new ResponseError(errors.unknown);
    } else {
      responseError = err;
    }

    res.status(responseError.statusCode);

    res.send({
      message: responseError.message,
      errors: responseError.errors,
    });
  };

  next();
};
