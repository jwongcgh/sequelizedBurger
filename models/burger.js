/* setup a sequelized model for how to interface with the database */

module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
    ,
    date: {
      type: DataTypes.DATE
    }
  },
{
  timestamps: false
});
  return Burger;
}
