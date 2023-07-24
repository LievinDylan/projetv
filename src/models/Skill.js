const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../sequelize-client");

class Skill extends Model {}

Skill.init({
  name: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  agent_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  }
}, {
  sequelize,
  tableName: "skill"
});


module.exports = Skill;