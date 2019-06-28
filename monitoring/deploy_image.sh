#!/bin/bash
set -ueo pipefail

if [ -z "${DOCKER_USERNAME}" -o -z "${DOCKER_PASSWORD}" -o -z "${DOCKER_REGISTRY}" ]; then
    echo "Missing environment variables. Required 'DOCKER_USERNAME', 'DOCKER_PASSWORD' and 'DOCKER_REGISTRY'.";
    exit 25;
fi;

docker-compose build web;
docker-compose push web;
