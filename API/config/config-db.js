module.exports = {
    HOST: "localhost",
    USER: "postgresdb",
    PASSWORD: "Yuhu123",
    DB: "recipes-app",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };