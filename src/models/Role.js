const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../sequelize-client");

class Role extends Model {}

Role.init({
  name: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  sequelize,
  tableName: "role"
});


module.exports = Role;