var web3 = require('web3');
var net = require('net');

var RPC = {
  'host': 'public-node',
  'port': '8545'
}

var config = function () {
  this.logFormat = "combined";
  this.provider = new web3.providers.HttpProvider('http://' + RPC.host + ':' + RPC.port);
  this.bootstrapUrl = "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/yeti/bootstrap.min.css";

  this.names = {
    "Terra-Chain": "TODO"
  }

}

module.exports = config;
