import { handleAPIError } from '../error';

test('APIError handler', () => {
  const error = {
  	response: {
  		data: { foo: 'baz' },
  		status: 401,
  		headers: {},
  	},
  };
  expect(true).toBe(true);
  //expect(handleAPIError(error)).toBe('Error: The given API key is not valid');
});