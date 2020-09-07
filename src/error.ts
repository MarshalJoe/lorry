import {
  AxiosError,
} from 'axios';
const chalk = require('chalk');

export function handleAPIError(error: AxiosError) {
	if (error.response) {
			switch (error.response?.status) {
        case 400:
          console.log(chalk.red("Error: The request was invalid"));
          break;
        case 401:
          console.log(chalk.red("Error: The given API key is not valid"));
          break;
        case 404:
          console.log(chalk.red("Error: The record could not be found"));
          break;
        case 500:
          console.log(chalk.red("Error: The ShipEngine API is experiencing issues"));
          break;
        default:
          console.log(chalk.red("Error: Unable to reach the ShipEngine API - please make sure you are connected"));
      }
	  } else {
	    console.log(chalk.red(`Error: ${error.message}`));
	  }
}