const { jwtAuth } = require("../middleware");
const ingredientServices = require("../services/ingredient-services.js");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Headers", "Authorization", "Origin, Content-Type, Accept");
    next();
  });

  // add an ingredient 
  app.post("/api/auth/addingredient", [jwtAuth.verifyToken], ingredientServices.create);

  // find all ingredients
  app.get("/api/auth/getingredients", [jwtAuth.verifyToken], ingredientServices.findAll);

  // find ingredient by ingredient id
  app.post("/api/auth/getingredientbyid", [jwtAuth.verifyToken], ingredientServices.findOne);

  // update ingredient by ingredient id
  app.post("/api/auth/updateingredient", [jwtAuth.verifyToken], ingredientServices.update);

  // delete ingredient by ingredient id
  app.post("/api/auth/deleteingredient", [jwtAuth.verifyToken], ingredientServices.delete);

};