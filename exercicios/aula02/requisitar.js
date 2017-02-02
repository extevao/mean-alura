// alurapic/server.js

var http = require('http');

http.createServer(function(req, res) {

        let indice = req.url.indexOf('=');
        let parametro = req.url.substr(indice + 1);
        res.end(parametro);

    })
    .listen(3000, function() {
        console.log('NEH');
    });
