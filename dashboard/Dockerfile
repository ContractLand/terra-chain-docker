FROM node:9-alpine

WORKDIR /eth-netstats

RUN apk add --update git && \
    git clone https://github.com/cubedro/eth-netstats.git . && \
    npm install && \
    npm install -g grunt-cli && \
    grunt

EXPOSE 3000

CMD ["npm", "start"]