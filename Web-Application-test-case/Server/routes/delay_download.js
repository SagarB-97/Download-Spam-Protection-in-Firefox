var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('delay_down');
});

module.exports = router;
