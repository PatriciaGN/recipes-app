const db = require("../models");
const Ingredient = db.ingredient;
// const Op = db.Sequelize.Op;

// Add new ingredient
exports.create = (req, res) => {
  console.log("Request : ", req.body)
  validateRequest(req);

  const ingredient = {
    name: req.body.name,
    isDeleted: req.body.isDeleted ? req.body.isDeleted : false
  };

  Ingredient.create(ingredient)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error when adding an ingredient!"
      });
    });
};

// Find all ingredients
exports.findAll = (req, res) => {
  Ingredient.findAll({ where: {isDeleted: false} })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error when getting all ingredients!"
      });
    });
};

// Find ingredient by ingredient id
exports.findOne = (req, res) => {
  console.log("Request : ", req.body)
  validateRequest(req);

  const id = req.body.id;
  Ingredient.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: "Ingredient not found!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error when geting ingredient by ingredient id : " + id
      });
    });
};

// Update ingredient by ingredient id
exports.update = (req, res) => {
  console.log("Request : ", req.body)
  validateRequest(req);

  const id = req.body.id;
  Ingredient.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Ingredient successfully updated."
        });
      } else {
        res.send({
          message: "Update process failed"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating ingredient with product id : " + id
      });
    });
};

// Delete ingredient by ingredient id
exports.delete = (req, res) => {
  console.log("Request : ", req.body)
  validateRequest(req);
  
  const id = req.body.id;
  Ingredient.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Ingredient successfully deleted."
        });
      } else {
        res.send({
          message: "Delete process failed!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Couldn't delete ingredient with ingredient id : " + id
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