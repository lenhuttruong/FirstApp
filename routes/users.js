var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET users listing. */
router.get('/userList', function(req, res, next) {
  // var privateKey = fs.readFileSync( '/key.pem', path.join(__dirname, '../bin') );
  res.send({msg: 'Test', url: req.headers, key: privateKey});
  res.end();
});

router.post('/addUser', function(req, res, next) {
  res.send({msg: 'Test'});
});

module.exports = router;
