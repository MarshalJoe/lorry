import axios from 'axios';
import { list } from '../carriers';

import * as getKey from '../auth';

jest.mock('axios');

test('Carriers resource API', async () => {
  const getKeySpy = jest.spyOn(getKey, 'getKey').mockImplementation(() => "i9009ks0d9ks0d9ks0d9k");
  list();
  expect(getKeySpy).toHaveBeenCalled();
  expect(axios.get).toHaveBeenCalled();
});