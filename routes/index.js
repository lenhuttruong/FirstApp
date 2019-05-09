var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('http://sub1.' + req.host + ':' + normalizePort(process.env.PORT || '2000') + '/index');
});
router.get('/index', function(req, res, next) {
  res.sendFile('/index.html', {root: path.join(__dirname, '..')});
});

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

module.exports = router;
