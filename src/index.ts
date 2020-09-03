#!/usr/bin/env node

// export const Greeter = (name: string) => `Hello ${name}`;

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const path = require('path');
const program = require('commander');

clear();
console.log(chalk.white(figlet.textSync('Lorry', { horizontalLayout: 'full' })));

program.version('1.0.0').description('A CLI for interacting with the ShipEngine API');

program
  .command('login')
  .description('Log in to the ShipEngine API')
  .option('-s, --setup_mode [mode]', 'Which setup mode to use')
  .action(function (options: object) {
    console.log('Logging in...');
  });

program
  .command('logout')
  .description('Log out of the ShipEngine API')
  .option('-s, --setup_mode [mode]', 'Which setup mode to use')
  .action(function (options: object) {
    console.log('Logging out...');
  });

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}
