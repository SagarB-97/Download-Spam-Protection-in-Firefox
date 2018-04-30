var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('delay_down', { title: 'Malicious Delay Page' });
});

module.exports = router;
