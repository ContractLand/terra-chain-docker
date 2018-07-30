FROM keymetrics/pm2:latest

WORKDIR /eth-net-intelligence-api

RUN apk add --update git

RUN git clone https://github.com/cubedro/eth-net-intelligence-api . &&\
    npm install

CMD ["pm2-docker", "app.json"]