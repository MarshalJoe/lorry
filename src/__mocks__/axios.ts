import { AxiosResponse } from 'axios';

const axiosResponse: AxiosResponse = {
  data: {
  	carriers: [
  		{
  			friendly_name: 'Stamps.com',
  			carrier_id: 's09909k0k',
  		},
  	],
  },
  status: 200,
  statusText: 'OK',
  config: {},
  headers: {},
};

export default {
  default: {
    get: jest.fn().mockImplementation(() => Promise.resolve(axiosResponse)),
  },
  get: jest.fn(() => Promise.resolve(axiosResponse)),
};