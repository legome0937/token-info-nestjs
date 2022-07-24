# Nest JS Skeleton for REST Application 

A skeleton/boilerplate/starter project for quickly building RESTful APIs using Node.js, NestsJS, Express, and MySQL.

By running one command, you will get a production-ready Node.js app installed and configured on your machine. There are many built-in features in the skeleton, including authentication using JWT, request validation, unit and integration tests, continuous integration, docker support, API documentation, pagination, etc. To learn more about its features, check out the following list.

## Description

- [Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

- Nest provides a level of abstraction above these common Node.js frameworks (Express/Fastify) but also exposes their APIs directly to the developer. This allows developers the freedom to use the myriad of third-party modules which are available for the underlying platform.

- There are superb libraries, helpers, and tools that exist for Node (and server-side JavaScript), none of them effectively solve the main problem of — Architecture.

Take it for a test drive. We'd love to hear any feedback you have or if you've thought of a new feature.

#### Create The Environment Variables

The `config/env/.env` file should be placed in root folder with the following variables.

- `config/env/.env` : Default Environment File
- `config/env/.env.dev` : Development Environment File
- `config/env/.env.test` : Test Environment File
- `config/env/.env.prod` : Production Environment File


```
# config/env/.env.example

APP_NAME=rest_api
NODE_ENV=dev
DB_HOST=127.0.0.1
DB_DATABASE=rest_api
DB_USER=user
DB_PASSWORD=root
DB_PORT=3306
```

