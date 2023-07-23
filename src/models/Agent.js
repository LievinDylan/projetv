const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../sequelize-client");

class Agent extends Model {}

Agent.init({
  name: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  quote: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  role_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  sequelize,
  tableName: "agent"
});


module.exports = Agent;