FROM node:12-alpine
MAINTAINER hyperone@jawnosc.tk
WORKDIR /src
COPY package.json package-lock.json ./
RUN npm ci
COPY . ./
RUN npm link
CMD ["node", "./monitoring/run_monitoring.js"]
