var express = require('express');
var path = require('path');
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

var index = require('./routes/index');
var single_download = require('./routes/single_download');
var delay_download = require('./routes/delay_download');

app.use('/', index);
app.use('/single_download', single_download);
app.use('/delay_download', delay_download);

module.exports = app;
