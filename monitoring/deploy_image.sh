#!/bin/bash
set -ueo pipefail

if [ -z "${DOCKER_USERNAME}" -o -z "${DOCKER_PASSWORD}" -o -z "${DOCKER_REGISTRY}" ]; then
    echo "Missing environment variables. Required 'DOCKER_USERNAME', 'DOCKER_PASSWORD' and 'DOCKER_REGISTRY'.";
    exit 25;
fi;

docker-compose -f docker-compose.yml build web;

echo "${DOCKER_PASSWORD}" | docker login -u "${DOCKER_USERNAME}" --password-stdin "${DOCKER_REGISTRY}";
docker image tag monitoring_web:latest "${DOCKER_REGISTRY}/hyperone/monitoring_web:${TAG_NAME}";
docker push "${DOCKER_REGISTRY}/hyperone/monitoring_web";