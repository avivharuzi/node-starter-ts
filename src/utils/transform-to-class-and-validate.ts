import { ClassConstructor } from 'class-transformer/types/interfaces';
import { plainToClass } from 'class-transformer';
import { validateOrReject } from 'class-validator';

import { BadRequest } from '../errors/bad-request';

export const transformToClassAndValidate = async <T, V = object>(
  clsConstructor: ClassConstructor<T>,
  plainObj: V
): Promise<T> => {
  try {
    const cls: T = plainToClass(clsConstructor, plainObj);
    // @ts-ignore
    await validateOrReject(cls, { forbidUnknownValues: true });
    return cls;
  } catch (errors) {
    throw new BadRequest(undefined, errors);
  }
};
