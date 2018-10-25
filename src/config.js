const config = {
  production: {
    DB: process.env.MONGODB_URI || 'mongodb://localhost:27017/SuperHeroes_production',
    PORT: process.env.PORT || 3033,
  },

  development: {
    DB: 'mongodb://localhost:27017/SuperHeroes_development',
    PORT: 3033,
  },

  test: {
    DB: 'mongodb://localhost:27017/SuperHeroes_test',
    PORT: 3033,
  },
};

exports.get = function get(env) {
  return config[env];
};
