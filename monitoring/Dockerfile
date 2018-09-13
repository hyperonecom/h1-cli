FROM node:10-alpine
MAINTAINER hyperone@jawnosc.tk
WORKDIR /src
COPY package.json package-lock.json ./
RUN npm install .
COPY . ./
RUN npm link
CMD ["nodejs", "./monitoring/run_monitoring.js"]
