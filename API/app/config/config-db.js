module.exports = {
    HOST: "db",
    USER: "root",
    PASSWORD: "root",
    DB: "dev_recipeapp",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };