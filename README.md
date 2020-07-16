# Portfolio-Web

This is a personal portfolio to showcase my work.

## Pre-Requisites

* Docker
* Node.js
* AWS ElasticBeanstalk CLI

## To build with Docker Compose

1. Run `docker-compose up -d --build` in terminal
2. Open `http://localhost` to see portfolio hosted by nginx

## To Add Docker Image to Repository

1. In `docker-compose.yml` change `image:` values to match `<your-repo>/<service-name>`
2. Run `docker push <your-repo>/<service-name>` fpr each service

## To Deploy to Elastic Beanstalk

1. To deploy to AWS EB, you must have the EB CLI Installed
2. Navigate into `remote-docker`
3. Run `eb create <your-service-name>`
4. Final result should be `Environment update completed successfully.`
5. To update, run `eb deploy`
6. To open in browser run `eb open`
7. To terminate the environment and all created dependencies run `eb terminate`
