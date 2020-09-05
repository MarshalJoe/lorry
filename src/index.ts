#!/usr/bin/env node

// export const Greeter = (name: string) => `Hello ${name}`;

import { login, logout } from './auth';
const chalk = require('chalk');
const figlet = require('figlet');
const path = require('path');
const program = require('commander');

program.version('1.0.0').description('A CLI for interacting with the ShipEngine API');

program
  .command('login')
  .description('Log in to the ShipEngine API')
  .option('-s, --setup_mode [mode]', 'Which setup mode to use')
  .action(function (options: object) {
    login();
  });

program
  .command('logout')
  .description('Log out of the ShipEngine API')
  .option('-s, --setup_mode [mode]', 'Which setup mode to use')
  .action(function (options: object) {
    logout();
  });

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  console.log(chalk.white(figlet.textSync('Lorry', { horizontalLayout: 'full' })));
  program.outputHelp();
}
