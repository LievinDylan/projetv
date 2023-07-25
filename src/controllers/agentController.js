const { Agent } = require('../models');

const agentController = {
    //Render la page de tous les agents
    async getAllAgents(req, res) {
    const agents = await Agent.findAll({
        include: "role",
        order: [["name","ASC"]]
    });
    res.render("agents", {agents})
    },
    // Render la page d'un agent selon l'id
    async getOneAgent(req, res) {
        const id = req.params.id;
        const agent = await Agent.findByPk(id, {
            include: ["role","skills"]
        });
        console.log(agent);
        res.render("agent", {agent});
    }
}

module.exports = agentController;