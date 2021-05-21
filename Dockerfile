FROM node:14.7.0

ARG SERVER_PORT

WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY ./package*.json ./

RUN npm i

COPY ./ ./

EXPOSE $SERVER_PORT

CMD ["npm", "run", "start:dev"]
