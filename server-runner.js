#!/usr/bin/env node
'use strict';

var config = require('./config')
  , http = require('http')
  , server
  ;

config.port = process.argv[2] || config.port;
config.wsport = process.argv[3] || config.wsport;

server = http.createServer(require('./server')).listen(config.port, function () {
  console.log('Listening on ' + config.protocol + '://127.0.0.1:' + server.address().port);
  console.log('Listening on ' + config.protocol + '://' + server.address().address + ':' + server.address().port);
  console.log('Listening on ' + config.href);
});

/*
var https = require('https')
  , fs = require('fs')
  , path = require('path')
  , server
  , options
  ;

options = {
  key: fs.readFileSync(path.join(__dirname, 'ssl', 'ldsconnect-key.pem')),
  ca: [
    fs.readFileSync(path.join(__dirname, 'ssl', '00-equifax.pem'))
  , fs.readFileSync(path.join(__dirname, 'ssl', '01-rapidssl.pem'))
  , fs.readFileSync(path.join(__dirname, 'ssl', '02-rapidssl.pem'))
  ],
  cert: fs.readFileSync(path.join(__dirname, 'ssl', '03-ldsconnect.pem'))
};

server = https.createServer(options, require('./server')).listen(config.port, function () {
  console.log('Listening on ' + config.protocol + '://127.0.0.1:' + server.address().port);
  console.log('Listening on ' + config.protocol + '://' + server.address().address + ':' + server.address().port);
  console.log('Listening on ' + config.href);
});
*/
