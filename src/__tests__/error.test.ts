import {
  AxiosError,
} from 'axios';
import { handleAPIError, Errors } from '../error';
import chalk from 'chalk';

test('APIError handler', () => {
	const logSpy = jest.spyOn(console, 'log').mockImplementation(jest.fn())
  const error: AxiosError = {
  	response: {
  		data: { foo: 'baz' },
  		config: {},
  		status: 401,
  		headers: {},
  		statusText: 'sdsd',
  	},
  	config: {},
  	isAxiosError: true,
  	toJSON: () => Object,
  	name: 'error',
  	message: 'axios error'
  };
  handleAPIError(error);
  expect(logSpy).toHaveBeenCalledWith(chalk.red(Errors.Forbidden));
});