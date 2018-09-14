FROM node:10-alpine as builder
WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

#############################################

FROM alpine:3.8

RUN apk --no-cache add libstdc++

COPY --from=builder /app/dist/h1-alpine /usr/local/bin/h1

CMD /usr/local/bin/h1
