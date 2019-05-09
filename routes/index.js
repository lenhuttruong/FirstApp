var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.sendFile('/index.html', {root: path.join(__dirname, '..')});
  res.redirect('https://sub1.' + req.headers.host + '/index');
});
router.get('/index', function(req, res, next) {
  res.sendFile('/index.html', {root: path.join(__dirname, '..')});
});

module.exports = router;
