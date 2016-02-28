
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');
var router = require('./router/router.js')
var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "/public")));
    

app.use('/api', router);


console.log('widget on port ' + port);
app.listen(port);  

module.exports = app;


