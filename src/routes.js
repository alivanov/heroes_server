const heroes = require('./controllers/heroes');

module.exports = function routes(app) {
  app.get('/api/heroes', heroes.getHeroes);
  app.get('/api/heroes/:id', heroes.getHero);
  app.put('/api/heroes/:id', heroes.updateHero);
  app.post('/api/heroes', heroes.createHero);
  app.delete('/api/heroes/:id', heroes.deleteHero);
};
