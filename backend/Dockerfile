FROM node:20-alpine

ARG PORT
ARG GRPC_PORT
ARG GRPC_DOMAIN

RUN apk add --no-cache bash

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

RUN echo "PORT=${PORT}" > .env
RUN echo "GRPC_PORT=${GRPC_PORT}" >> .env
RUN echo "GRPC_DOMAIN=${GRPC_DOMAIN}" >> .env

EXPOSE 8080

COPY wait-for-microservice.sh /app/wait-for-microservice.sh
RUN chmod +x /app/wait-for-microservice.sh

CMD ["/bin/bash", "-c", "/app/wait-for-microservice.sh"]