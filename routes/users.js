var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  console.log(req.body);
  console.log(req.json);
  res.sendStatus(200);
});


/* GET users listing. */
router.post('/', function(req, res, next) {
  //res.send('respond with a resource');
  console.log('req.body:');
  console.log(req.body);
  res.sendStatus(200);
});

module.exports = router;
