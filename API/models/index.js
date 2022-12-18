const configuration = require("../config/config-db.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  configuration.DB, 
  configuration.USER, 
  configuration.PASSWORD, {
    host: configuration.HOST,
    dialect: configuration.dialect,
    pool: {
      max: configuration.pool.max,
      min: configuration.pool.min,
      acquire: configuration.pool.acquire,
      idle: configuration.pool.idle
    }
  });

const database = {};
database.Sequelize = Sequelize;
database.sequelize = sequelize;
database.ingredient = require("./ingredient.js")(sequelize, Sequelize);
database.recipe = require("./recipe.js")(sequelize, Sequelize);

module.exports = database;