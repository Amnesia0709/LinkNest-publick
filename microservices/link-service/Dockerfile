FROM node:20-alpine

ARG DATABASE_URL

RUN apk add --no-cache bash

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN echo "DATABASE_URL=${DATABASE_URL}" > .env

EXPOSE 50051

COPY wait-for-db.sh /app/wait-for-db.sh
RUN chmod +x /app/wait-for-db.sh

CMD ["/bin/bash", "-c", "/app/wait-for-db.sh"]