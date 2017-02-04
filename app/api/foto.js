let api = {};
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

api.lista = function(req, res) {
    res.json(fotos);
}

api.buscaPorId = function(req, res) {
    let foto = fotos.find(function(foto) {
        return foto._id == req.params.id;
    });

    res.json(foto);
}

api.removePorId = function(req, res) {
    fotos = fotos.filter(function(foto) {
        return foto._id != req.params.id;
    });
    res.sendStatus(204);
}

api.adiciona = function(req, res) {
    console.log(req.body);
    fotos.push(req.body);
    res.json(foto);
}

api.atualiza = function(req, res) {
    let foto = req.body;
    let fotoId = req.params.id;
    let indice = fotos.findIndex(function(foto) {
        return foto._id == fotoId;
    });
    fotos[indice] = foto;

    res.sendStatus(200);
}

module.exports = api;
