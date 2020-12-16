FROM node:14-alpine
MAINTAINER hyperone@jawnosc.tk
RUN apk add --no-cache --repository=http://dl-cdn.alpinelinux.org/alpine/edge/community docker-cli zfs
WORKDIR /src
COPY package.json package-lock.json ./
RUN npm ci
COPY . ./
RUN npm link
CMD ["node", "./monitoring/run_monitoring.js"]
