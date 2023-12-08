FROM node:20

WORKDIR /nbaPlayersServer

COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .
