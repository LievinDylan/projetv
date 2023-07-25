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
        if(!agent) {
            return res.status(404).render('404', { error : `L'agent n°${id} n'existe pas !`})
        }
        res.render("agent", {agent});
    }
}

module.exports = agentController;