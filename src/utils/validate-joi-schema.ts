import * as Joi from 'joi';

import errors from '../errors';
import { ResponseError } from '../modules/Shared/ResponseError';

export default <T>(value: T, schema: Joi.ObjectSchema): T => {
  try {
    const result = Joi.validate(value, schema, {
      abortEarly: false,
      stripUnknown: true,
    });

    if (result.error) {
      throw result.error;
    }

    return result.value;
  } catch (err) {
    throw new ResponseError(errors.validation, err);
  }
}
