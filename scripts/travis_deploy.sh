#!/bin/bash
set -eux
if [ "$TRAVIS_PULL_REQUEST" == "false" ]; then
  TAG_NAME="${TRAVIS_BRANCH}";

  if [[ "${TRAVIS_BRANCH}" == "master" ]]; then
      TAG_NAME="latest";
  fi;

  echo "${DOCKER_PASSWORD}" | docker login -u "${DOCKER_USERNAME}" --password-stdin "${DOCKER_REGISTRY}"
  docker build . -t "${DOCKER_REGISTRY}/cli:${TAG_NAME}"
  docker push "${DOCKER_REGISTRY}/cli:${TAG_NAME}"
  docker run --rm "${DOCKER_REGISTRY}/cli:${TAG_NAME}" h1 --help
  if [[ "${TRAVIS_BRANCH}" == "develop" ]]; then
    cd ./monitoring;
    ./deploy_image.sh;
  fi;
fi;
