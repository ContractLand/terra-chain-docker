FROM node:9-alpine

WORKDIR /explorer

RUN apk add --no-cache --virtual .gyp \
    python \
    make \
    g++ \
    git

# Uncomment the next line if running behind a proxy
# RUN git config --global url."https://".insteadOf git://

RUN git clone https://github.com/ContractLand/eth-explorer.git .
RUN npm install
RUN npm install bower -g
RUN bower install --allow-root

EXPOSE 8000

CMD npm start
