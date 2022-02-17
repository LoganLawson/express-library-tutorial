var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


// challenge yourself - create a new route
router.get('/cool/', function(req, res, next) {
  //when you get a request for /cool/ send back, "you're so cool" i think...
  res.send("You're so cool.");
});

module.exports = router;
