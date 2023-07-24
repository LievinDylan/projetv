const { Agent } = require('../models');

const customController = {
    renderCustomPage(req, res) {
        res.render("custom");
    },

    async renderCustomOneTeam(req, res) {
        const { playerone, playertwo, playerthree, playerfour, playerfive } = req.body;
        console.log(playerone);

        const i = Math.floor(Math.random() * 22);
        let j = Math.floor(Math.random() * 22);
        while (i === j) {
            j = Math.floor(Math.random() * 22);
          }
        let k = Math.floor(Math.random() * 22);
        while (k === i || k === j) {
            k = Math.floor(Math.random() * 22);
          }
        let l = Math.floor(Math.random() * 22);
        while (l === k || l === i || l === j) {
            l = Math.floor(Math.random() * 22);
          }
        let m = Math.floor(Math.random() * 22);
        while (m === i || m === j || m === k || m === l) {
            m = Math.floor(Math.random() * 22);
          }
        const agents = await Agent.findAll({
            include: ["role", "skills", {
                model: Weapon,
                as: "weapons",
                include: "type"
            }]
        });
        res.render("/personalisation", { agents, i , j , k , l , m, playerone })
    }
    
}

module.exports = customController;