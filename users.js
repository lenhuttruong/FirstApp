var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/userList', function(req, res, next) {
  res.send({msg: 'Test'});
  res.end();
});

router.post('/addUser', function(req, res, next) {
  res.send({msg: 'Test'});
});

module.exports = router;
