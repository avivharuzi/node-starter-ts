import * as httpStatusCodes from 'http-status-codes';

export default Object.freeze({
  validation: {
    statusCode: httpStatusCodes.BAD_REQUEST,
    message: 'One or more of the input values you entered are invalid',
  },
  unknown: {
    statusCode: httpStatusCodes.INTERNAL_SERVER_ERROR,
    message: 'An error has occurred, please try again later',
  },
});
