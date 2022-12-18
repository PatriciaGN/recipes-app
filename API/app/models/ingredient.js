module.exports = (sequelize, Sequelize) => {
    const Ingredient = sequelize.define('ingredient', {
      name: {
        type: Sequelize.STRING
      },
      isDeleted: {
        type: Sequelize.BOOLEAN
      }
    });
    Ingredient.belongsToMany(Recipe, {through: 'RecipeIngredients'})
    return Ingredient;
  };