const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const User = require("../models/User");
const models = [User];

class Database {
  constructor() {
    this.init();
  }
  init() {
    this.connection = new Sequelize(dbConfig);

    models.map((model) => model.init(this.connection));
  }
}

console.log(dbConfig);

const database = new Database();

module.exports = database;
