import {
  AxiosError,
} from 'axios';
import { handleAPIError, Errors } from '../error';
import chalk from 'chalk';

function generateError(statusCode: number) : AxiosError {
  const error: AxiosError = {
    response: {
      data: { foo: 'baz' },
      config: {},
      status: statusCode,
      headers: {},
      statusText: 'sdsd',
    },
    config: {},
    isAxiosError: true,
    toJSON: () => Object,
    name: 'error',
    message: 'axios error'
  };
  return error;
}

describe('APIError handler', () => {
  const logSpy = jest.spyOn(console, 'log').mockImplementation(jest.fn());

  it('should throw a BadRequest error', () => {
    handleAPIError(generateError(400));
    expect(logSpy).toHaveBeenCalledWith(chalk.red(Errors.BadRequest));
  });

  it('should throw a Forbidden error', () => {
    handleAPIError(generateError(401));
    expect(logSpy).toHaveBeenCalledWith(chalk.red(Errors.Forbidden));
  });

  it('should throw a NotFound error', () => {
    handleAPIError(generateError(404));
    expect(logSpy).toHaveBeenCalledWith(chalk.red(Errors.NotFound));
  });

  it('should throw a ServerError error', () => {
    handleAPIError(generateError(500));
    expect(logSpy).toHaveBeenCalledWith(chalk.red(Errors.ServerError));
  });

  it('should throw a Default error', () => {
    handleAPIError(generateError(600));
    expect(logSpy).toHaveBeenCalledWith(chalk.red(Errors.Default));
  });
});