const DatabaseConfig = require('../config/database');
const Mongoose = require('mongoose');
const Routes = require('../routes');
const Express = require('express');

class App {
  constructor() {
    this.server = Express();
    this.database();
    this.routes();
  }

  database() {
    Mongoose.connect(DatabaseConfig.uri, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
  }

  routes() {
    this.server.use(Routes)
  }

}

module.exports = new App().server;