# Tu Empleado Perfecto API
## Prerequisites
**Node version 16.15.0**

You can download node from the official website by open the link: https://nodejs.org/es/download/

**Yarn version 1.22.15**

It is recommended to install Yarn through the npm package manager, which comes bundled with Node.js when you install it on your system.

```bash
$ npm install --global yarn
```
## Installation

1. create a copy of .env.stage.dev.example with the name `.env.stage.dev`, placed it at the root of the project, and replace its values with your own credentials.

2. Run the following commands:

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Test

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```
## Stay in touch

- Developer - [Christian Sagástegui](https://github.com/csagastegui59)

## License

Nest is [MIT licensed](LICENSE).
