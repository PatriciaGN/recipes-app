const { jwtAuth } = require("../middleware");
const recipeServices = require("../services/recipe-services.js");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Headers", "Authorization", "Origin, Content-Type, Accept");
    next();
  });

  // add a recipe 
  app.post("/api/auth/addrecipe", [jwtAuth.verifyToken], recipeServices.create);

  // find all recipes
  app.get("/api/auth/getrecipes", [jwtAuth.verifyToken], recipeServices.findAll);

  // find recipe by recipe id
  app.post("/api/auth/getrecipebyid", [jwtAuth.verifyToken], recipeServices.findOne);

  // update recipe by recipe id
  app.post("/api/auth/updaterecipe", [jwtAuth.verifyToken], recipeServices.update);

  // delete recipe by recipe id
  app.post("/api/auth/deleterecipe", [jwtAuth.verifyToken], recipeServices.delete);

};