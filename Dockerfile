FROM node:12.18.3

ARG SERVER_PORT

WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY ./package*.json ./

RUN npm i

COPY ./ ./

EXPOSE $SERVER_PORT

CMD ["npm", "run", "start:dev"]
