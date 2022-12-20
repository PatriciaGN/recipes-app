module.exports = (sequelize, Sequelize) => {
    const Recipe = sequelize.define("recipes", {
      name: {
        type: Sequelize.STRING
      },
      ingredients: {
        type: Sequelize.STRING
      },
      quantity: {
        type: Sequelize.STRING
      },
      isDeleted: {
        type: Sequelize.BOOLEAN
      }
    });
    // Recipes.belongsToMany(Ingredient, { through: 'RecipeIngredients'})
    return Recipe;
  };