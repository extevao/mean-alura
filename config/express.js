var express = require('express');
var app = express();

app.use(express.static('./public'));

app.get('/v1/fotos', function(req, res) {
    var fotos = [{
            _id: 1,
            titulo: 'Leão',
            url: 'http://www.fundosanimais.com/Imagens/fotos-leoes.jpg'
        },
        {
            _id: 2,
            titulo: 'Leão2',
            url: 'http://www.fundosanimais.com/Imagens/fotos-leoes.jpg'
        }
    ];
    res.json(fotos);
});

module.exports = app;
