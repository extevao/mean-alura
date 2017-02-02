var express = require('express');
var app = express();

app.use(express.static('./public'));

app.get('/v1/fotos', function(req, res) {
    let fotos = [{
            _id: 1,
            titulo: 'Leão',
            url: 'http://www.fundosanimais.com/Minis/leoes.jpg'
        },
        {
            _id: 2,
            titulo: 'Leão 2',
            url: 'http://www.fundosanimais.com/Minis/leoes.jpg'
        }
    ];
    res.json(fotos);
});

app.get('/v1/grupos', function(req, res) {
    let grupos = [{
            _id: 1,
            nome: 'esporte'
        },
        {
            _id: 2,
            nome: 'lugares'
        },
        {
            _id: 3,
            nome: 'animais'
        }
    ];
    res.json(grupos);
});

module.exports = app;
