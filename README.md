# Portfolio-Web

This is a multi-container docker environment that utilizes Travis CI for CI\CD and deploys to AWS.
It is a personal portfolio to build upon my developer skills and showcase my work.


[![Build Status](https://travis-ci.org/alex-gagnon/Portfolio-Web.svg?branch=main)](https://travis-ci.org/github/alex-gagnon/Portfolio-Web)

1. Push code in master branch to github
2. Travis automatically pulls repo
3. Travis builds test images for React and Node, tests code
4. Travis builds prod images
5. Travis pushes built prod images to Docker Hub
6. Travis pushes project to AWS EB
7. EB reads Dockerrun.aws.json, pulls images from Docker Hub, deploys

## Development

The best way to build is via docker containers. You do not need to install packages locally via `npm` unless you
are adding new libraries.

## How it works

* Client and Server can each be run separately by navigating into their respective directories and running `npm run`, `npm test`, etc.
* When started through `docker-compose`, the client and server containers are linked through an `nginx` reverse proxy that acts as the
gateway to each service.
    * `nginx` runs on the accessible port of `8080`, which you use when opening `localhost` to view the application.
    * `client` runs on port `3000` which `nginx` connects to.
    * `server` runs on port `5000` which `nginx` connects to and allows `client` to access the apis available.

### Pre-Requisites

* Docker
* Node.js
* AWS ElasticBeanstalk CLI (only if you're using ElasticBeanstalk)

### Easiest way to build for development locally

1. Run `.\local_scripts\docker_compose_dev.ps1`
2. Open `http://localhost:8080`

### To build development with Docker Compose CLI

1. Run `docker-compose -f .\docker-compose.dev.yml up -d --build` in terminal
2. Open `http://localhost:8080`

### To Add A Docker Image to Repository

1. In `docker-compose.yml` or `docker-compose.dev.yml` change `image:` values to match `<your-repo>/<service-name>`
2. Run `docker push <your-repo>/<service-name>` for each service

## Working with ElasticBeanstalk

NOTE: This assumes you have an account with AWS

### To Deploy to Your Own ElasticBeanstalk

1. To deploy to AWS EB, you must have the EB CLI Installed
2. Run `eb init` to configure your settings
3. Run `eb create <your-service-name>`
4. Final result should be `Environment update completed successfully.`
5. To update, run `eb deploy`
6. To open in browser run `eb open`
7. To terminate the environment and all created dependencies run `eb terminate`

## LICENSE

This is LISCENSED with Apache 2.0. See [LICENSE](LICENSE)