FROM node:9-alpine

WORKDIR /app

RUN apk add --no-cache --virtual .gyp \
    python \
    make \
    g++ \
    git

RUN git clone https://github.com/ContractLand/etherchain-light.git --recursive .
RUN npm install

EXPOSE 3000

CMD npm start
