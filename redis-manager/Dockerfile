FROM ruby:alpine

RUN apk update

WORKDIR /app

ADD . .

RUN apk upgrade

RUN apk add --no-cache bash openssh wget

RUN gem install redis

RUN wget http://download.redis.io/redis-stable/src/redis-trib.rb

CMD /bin/bash