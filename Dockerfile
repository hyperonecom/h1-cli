FROM node:12-alpine as builder
WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npx pkg -c ./package.json -t "node12-alpine" -o "./dist/h1" "./bin/h1"
RUN npx pkg -c ./package.json -t "node12-alpine" -o "./dist/rbx" "./bin/rbx"

#############################################

FROM alpine:3.8

RUN apk --no-cache add libstdc++

COPY --from=builder /app/dist/* /usr/local/bin/

CMD /usr/local/bin/h1
