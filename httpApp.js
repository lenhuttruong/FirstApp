var express = require('express');
var app = require('./app');

var httpApp = express();

httpApp.use(function(req, res, next) {
  var reqType = req.headers["x-forwarded-proto"];
  reqType == 'https' ? next() : res.redirect("https://" + req.host + ':' + app.get('port') + req.url);
});

module.exports = httpApp;