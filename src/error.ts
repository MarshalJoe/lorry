import { AxiosError } from 'axios';
import chalk from 'chalk';

export enum Errors {
  BadRequest = 'Error: The request was invalid',
  Forbidden = 'Error: The given API key is not valid',
  NotFound = 'Error: The record could not be found',
  ServerError = 'Error: The ShipEngine API is experiencing issues',
  Default = 'Error: Unable to reach the ShipEngine API - please make sure you are connected',
}

export function handleAPIError(error: AxiosError) {
  if (error.response) {
    switch (error.response?.status) {
      case 400:
        console.log(chalk.red(Errors.BadRequest));
        break;
      case 401:
        console.log(chalk.red(Errors.Forbidden));
        break;
      case 404:
        console.log(chalk.red(Errors.NotFound));
        break;
      case 500:
        console.log(chalk.red(Errors.ServerError));
        break;
      default:
        console.log(chalk.red(Errors.Default));
    }
  } else {
    console.log(chalk.red(`Error: ${error.message}`));
  }
}
