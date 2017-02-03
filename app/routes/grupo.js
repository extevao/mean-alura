

module.exports = function(app){


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
}
