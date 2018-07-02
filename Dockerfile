FROM node:carbon-alpine
WORKDIR /usr/src/app
COPY . .
RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh
RUN npm install
CMD npm start
