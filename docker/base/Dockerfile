FROM node:16.18.1-alpine AS build

ENV NODE_OPTIONS=--max_old_space_size=8094

WORKDIR /app
COPY package.json package-lock.json .npmrc ./
RUN npm install -g npm@latest
RUN npm install -g @angular/cli@latest
RUN npm i