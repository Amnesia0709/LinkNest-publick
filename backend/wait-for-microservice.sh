#!/bin/bash

until nc -z -v -w3 linkServiceContainer 50051; do
    echo "Waiting for Link Service connection..."
    sleep 1
done

echo "Link Service is up, running Backend"

npm run dev