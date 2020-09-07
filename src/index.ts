#!/usr/bin/env node

import { login, logout } from './auth';
import { list } from './carriers';
import chalk from 'chalk';
import figlet from 'figlet';
import program from 'commander';

program.version('1.0.0').description('A CLI for interacting with the ShipEngine API');

program
  .command('login')
  .description('Log in to the ShipEngine API')
  .action((options: object) => {
    login();
  });

program
  .command('logout')
  .description('Log out of the ShipEngine API')
  .action((options: object) => {
    logout();
  });

program
  .command('carriers <command>')
  .description('Execute actions against your ShipEngine carriers')
  .action((command: string, options: object) => {
    switch (command) {
      case 'ls':
        list();
        break;
      case 'get':
        console.log('This method has not been implemented yet');
        break;
      default:
        console.log(`${command} is not a valid subcommand for carriers`);
    }
  })
  .on('--help', () => {
    console.log('');
    console.log('Example:');
    console.log('');
    console.log('  $ lorry carriers ls');
  });

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  console.log(chalk.white(figlet.textSync('Lorry', { horizontalLayout: 'full' })));
  program.outputHelp();
}
