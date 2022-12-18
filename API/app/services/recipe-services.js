const db = require("../models");
const Recipe = db.recipe;
// const Op = db.Sequelize.Op;

// Add new recipe
exports.create = (req, res) => {
  console.log("Request : ", req.body)
  validateRequest(req);

  const recipe = {
    name: req.body.name,
    ingredients: req.body.ingredients,
    quantity: req.body.ingredients,
    isDeleted: req.body.isDeleted ? req.body.isDeleted : false
  };

  Recipe.create(recipe)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error when adding a recipe!"
      });
    });
};

// Find all recipes
exports.findAll = (req, res) => {
  Recipe.findAll({ where: {isDeleted: false} })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error when geting all recipes!"
      });
    });
};

// Find recipe by recipe id
exports.findOne = (req, res) => {
  console.log("Request : ", req.body)
  validateRequest(req);

  const id = req.body.id;
  Recipe.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: "Recipe not found!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error when getting recipe by recipe id : " + id
      });
    });
};

// Update recipe by recipe id
exports.update = (req, res) => {
  console.log("Request : ", req.body)
  validateRequest(req);

  const id = req.body.id;
  Recipe.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Recipe successfully updated."
        });
      } else {
        res.send({
          message: "Update process failed"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating recipe with recipe id : " + id
      });
    });
};

// Delete recipe by recipe id
exports.delete = (req, res) => {
  console.log("Request : ", req.body)
  validateRequest(req);
  
  const id = req.body.id;
  Recipe.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Recipe successfully deleted."
        });
      } else {
        res.send({
          message: "Delete process failed!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Couldn't delete recipe with product id : " + id
      });
    });
};

function validateRequest(req){
  if (!req.body) {
    res.status(400).send({
      message: "Request is empty!"
    });
    return;
  }
}