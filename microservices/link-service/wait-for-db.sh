#!/bin/bash

until nc -z -v -w3 mysqlContainer 3306; do
    echo "Waiting for databse connection..."
    sleep 1
done

echo "Database is up, running prisma"
npx prisma db pull
npx prisma generate

npm run dev