var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.sendFile('/index.html', {root: path.join(__dirname, '..')});
  // res.redirect('http://sub1.' + req.headers.host + '/index.html');
  res.redirect('/index.html');
});
router.get('/index.html', function(req, res, next) {
  res.sendFile('/index.html', {root: path.join(__dirname, '..')});
});

module.exports = router;
