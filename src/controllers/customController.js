const { Agent } = require('../models');
const { Weapon } = require('../models');

const customController = {
    renderCustomPage(req, res) {
        res.render("custom");
    },
    async renderCustomOneTeamPage(req, res) {
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
          const pOne = req.session.playerone;
          const pTwo = req.session.playertwo;
          const pThree = req.session.playerthree;
          const pFour = req.session.playerfour;
          const pFive = req.session.playerfive;
        const agents = await Agent.findAll({
            include: ["role", "skills", {
                model: Weapon,
                as: "weapons",
                include: "type"
            }]
        });
        res.render("oneteam", { agents, i , j , k , l , m, pOne, pTwo, pThree, pFour, pFive })
    },
    renderCustomOneTeam(req, res) {
        req.session.playerone = req.body.playerone;
        req.session.playertwo = req.body.playertwo;
        req.session.playerthree = req.body.playerthree;
        req.session.playerfour = req.body.playerfour;
        req.session.playerfive = req.body.playerfive;
        res.redirect("/generator/oneteam");
    },

    
}

module.exports = customController;