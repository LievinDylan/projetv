const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../sequelize-client");

class Weapon extends Model {}

Weapon.init({
  name: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  type_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  sequelize,
  tableName: "weapon"
});


module.exports = Weapon;