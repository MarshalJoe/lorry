![Lorry CLI](https://s.clipartkey.com/mpngs/s/227-2275392_truck-lorry-clipart-black-and-white.png)

# Lorry

```sh-session
$ lorry
  _
 | |       ___    _ __   _ __   _   _
 | |      / _ \  | '__| | '__| | | | |
 | |___  | (_) | | |    | |    | |_| |
 |_____|  \___/  |_|    |_|     \__, |
                                |___/
Usage: lorry [options] [command]

A CLI for interacting with the ShipEngine API

Options:
  -V, --version       output the version number
  -h, --help          display help for command

Commands:
  login               Log in to the ShipEngine API
  logout              Log out of the ShipEngine API
  carriers <command>  Execute actions against your ShipEngine carriers
  help [command]      display help for command
```

<!-- toc -->
* [Usage](#usage)
* [Testing](#testing)
* [Linting](#linting)
* [Formatting](#formatting)
* [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->
```sh-session
$ npm install -g @jarsmohella/lorry
$ lorry COMMAND
running command...
$ lorry --version
1.0.0
$ lorry --help [COMMAND]
USAGE
  $ lorry COMMAND
...
```
<!-- usagestop -->

# Testing

<!-- testing -->
```sh-session
$ npm run test
```
<!-- testingstop -->

# Linting

<!-- linting -->
```sh-session
$ npm run lint
```
<!-- lintingstop -->

# Formatting

<!-- formatting -->
```sh-session
$ npm run format
```
<!-- formattingstop -->

# Commands

<!-- commands -->
* [`lorry login`](#lorry-login)
* [`lorry logout`](#lorry-logout)
* [`lorry carriers [COMMAND]`](#lorry-carriers-command)

## `lorry login`

Login with your ShipEngine API key

```
USAGE
  $ lorry login

OPTIONS
  -h, --help  Show help for the login command

ALIASES
  $ lorry login
```

_See code: [src\auth.ts](https://github.com/MarshalJoe/lorry/blob/master/src/auth.ts#L9)_

## `lorry logout`

Clears the local ShipEngine API key

```
USAGE
  $ lorry logout

OPTIONS
  -h, --help  Show help for the logout command

ALIASES
  $ connect logout
```

_See code: [src\auth.ts](https://github.com/MarshalJoe/lorry/blob/master/src/auth.ts#L32)_

## `lorry carriers <COMMAND>`

Execute actions against your ShipEngine carriers

```
USAGE
  $ lorry carriers ls

OPTIONS
  -h, --help  Show help for the logs command
```

_See code: [src\carriers.ts](https://github.com/MarshalJoe/lorry/blob/master/src/carriers.ts#L10)_
<!-- commandsstop -->
