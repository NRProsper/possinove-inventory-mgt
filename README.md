<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->



# Inventory Management App

A Dockerized NestJS app set up with PostgreSQL and pgAdmin for streamlined development.

You can preview the api here: [Inventory Management API](https://possinove-inventory-mgt.onrender.com/)

## Prerequisites

Ensure the following are installed on your local machine:
- **Docker**: [Download & Install](https://docs.docker.com/get-docker/)
- **Docker Compose**: Comes pre-installed with Docker Desktop

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/NRProsper/possinove-inventory-mgt.git
cd possinove-inventory-mgt
```

### 2. Build and Run Services

Simply run Docker Compose to start the application and services:

```bash
docker compose up -d
```

This command will:
- Build and start the NestJS application (port: 3000)
- Start the PostgreSQL database server (port: 5432)
- Start pgAdmin (port: 5050)

### 3. Configure pgAdmin

1. Go to [localhost:5050](http://localhost:5050).
2. Login using:
   - **Email**: `admin@admin.com`
   - **Password**: `pgadmin4`
3. Add a new server in pgAdmin:
   - **Name**: `postgres`
   - **Host**: `db`
   - **Port**: `5432`
   - **Username**: `postgres`
   - **Password**: `postgres`

### 4. Access the Application

The app should now be running at [localhost:3000](http://localhost:3000).

## Project Structure

- **db**: PostgreSQL service.
- **pgAdmin**: Database management UI.
- **app (NestJS)**: Node.js app with Nest framework, automatically built and run by Docker.

## Stopping Services

To stop all services:
```bash
docker compose down
```

## Troubleshooting

- If there are issues with the database, try removing the `pgdata` folder in your project to reset PostgreSQL data.
- Ensure there are no port conflicts on your local machine for `3000`, `5432`, or `5050`.
