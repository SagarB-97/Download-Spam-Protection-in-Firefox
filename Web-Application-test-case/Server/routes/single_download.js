var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var file = './downloadFile/test.txt';
    res.download(file);
});

module.exports = router;
