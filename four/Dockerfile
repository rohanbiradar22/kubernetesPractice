FROM ubuntu:latest

WORKDIR /app

COPY . /app

RUN apt-get update -y && \
    apt-get install -y curl && \
    curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs && \
    npm install -g nodemon && \
    npm i && \
    npm i dotenv

ENV PORT 3000

CMD nodemon index.js