'use strict';

var connect = require('connect')
  , path = require('path')
  , app = connect()
  ;

app
  .use(connect.compress())
  ;

//
// Generic Template API
//
app
  .use(connect.static(path.join(__dirname, 'data')))
  //.use(connect.static(path.join(__dirname, 'dist')))
  //.use(connect.static(path.join(__dirname, '.tmp', 'concat')))
  .use(connect.static(path.join(__dirname, 'app')))
  .use(connect.static(path.join(__dirname, '.tmp')))
  ;

module.exports = app;
