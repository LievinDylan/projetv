const { Agent } = require('../models');

const agentController = {
    async renderAllAgents(req, res) {
    const agents = await Agent.findAll({
        include: "role",
        order: [["name","ASC"]]
    });
    res.render("agents", {agents})
    },

    async renderAgent(req, res) {
        const id = req.params.id;
        const agent = await Agent.findByPk(id, {
            include: ["role","skills"]
        });
        console.log(agent);
        res.render("agent", {agent});
    }
}

module.exports = agentController;