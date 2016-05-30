var express = require('express');
var logger = require('morgan');
var chalk = require('chalk');
var path = require('path');




var app = express();

// app variables
var port = process.env.PORT || 8080;
var rootPath = path.join(__dirname, '../');
var indexPath = path.join(rootPath, './public/views/index.html');
app.set('indexHTMLPath', indexPath);

// logging middleware
app.use(logger('dev'));

// static middleware
app.use(express.static(path.join(__dirname, '../public/')));


// send for root
app.get('/*', function (req, res, next) {
  console.log('sending', __dirname + '/../public/index.html');
  res.sendFile(app.get('indexHTMLPath'));
});



// error handling
app.use(function (err, req, res, next) {
    console.error(err)
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error.');
});


app.listen(port, console.log(chalk.magenta('listening on port'), chalk.blue(port)));