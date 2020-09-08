import axios from 'axios';
import Carriers from '../Carriers';

import * as getKey from '../auth';

jest.mock('axios');

test('Carriers resource API', async () => {
  const logSpy = jest.spyOn(console, 'log').mockImplementation(jest.fn())
  const getKeySpy = jest.spyOn(getKey, 'getKey').mockImplementation(() => "i9009ks0d9ks0d9ks0d9k");
  Carriers.list();
  expect(getKeySpy).toHaveBeenCalled();
  expect(axios.get).toHaveBeenCalled();
});