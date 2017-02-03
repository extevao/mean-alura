var express = require('express');
var app = express();
var consign = require('consign');

app.use(express.static('./public'));

consign()
    .include('app/routes')
    .into(app);



module.exports = app;
