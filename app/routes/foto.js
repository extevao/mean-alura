

module.exports = function(app){
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


}
