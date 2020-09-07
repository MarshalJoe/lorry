# Lorry

<!-- toc -->
* [Usage](#usage)
* [Testing](#testing)
* [Linting](#linting)
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

_See code: [src\auth.ts]()_

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

_See code: [src\auth.ts]()_

## `lorry carriers <COMMAND>`

Execute actions against your ShipEngine carriers

```
USAGE
  $ lorry carriers <COMMAND>

OPTIONS
  -h, --help  Show help for the logs command
```

_See code: [src\carriers.ts]()_
<!-- commandsstop -->
