const Agent = require("./Agent");
const Role = require("./Role");
const Skill = require("./Skill");
const Type = require("./Type");
const Weapon = require("./Weapon");

// Agent <-> Role
Role.hasMany(Agent, {
    foreignKey: "role_id",
    as: "agents"
});
Agent.belongsTo(Role, {
    foreignKey: "role_id",
    as: "role"
});


// Agent <-> Skill
Agent.hasMany(Skill, {
    foreignKey: "agent_id",
    as: "skills"
});
Skill.belongsTo(Agent, {
    foreignKey: "agent_id",
    as: "agent"
});

// Weapon <-> Type
Type.hasMany(Weapon, {
    foreignKey: "type_id",
    as: "weapons"
});
Weapon.belongsTo(Type, {
    foreignKey: "type_id",
    as: "type"
});

// Agent <-> Weapon
Agent.belongsToMany(Weapon, {
    through: "agent_has_weapon",
    as: "weapons",
    foreignKey: "agent_id"
});
Weapon.belongsToMany(Agent, {
    through: "agent_has_weapon",
    as: "agents",
    foreignKey: "weapon_id"
})


module.exports = { Agent, Role, Skill, Type, Weapon };
