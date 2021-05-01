import * as Joi from 'joi';

import errors from '../errors';
import { ResponseError } from '../modules/Shared/ResponseError';

export default <T>(value: T, schema: Joi.ObjectSchema): T => {
  try {
    const result = schema.validate(value, {
      abortEarly: false,
      stripUnknown: true,
    });

    if (result.error) {
      // noinspection ExceptionCaughtLocallyJS
      throw result.error;
    }

    return result.value;
  } catch (err) {
    throw new ResponseError(errors.validation, err);
  }
};
