const { Agent } = require('../models');
const { Weapon } = require('../models');

const generatorController = {
    generatorAgent() {
        const i = Math.floor(Math.random() * 22) + 1;
        return i;
    },
    generatorWeapon() {
        let i = Math.floor(Math.random()* 17);
        return i;
    },
    generatorZeroOrOne() {
        let i = Math.floor(Math.random());
        return i;
    },
    renderGenerator(req, res) {
        res.render("generator")
    },
    async renderEasy(req, res) {
        const i = generatorController.generatorAgent();

        const agent = await Agent.findByPk(i, {
            include: ["role"]
        });

        res.render("easy", { agent });
    },
    async renderMedium(req, res) {
        const i = generatorController.generatorAgent();
        const j = generatorController.generatorZeroOrOne();
        const k = generatorController.generatorZeroOrOne();
        const l = generatorController.generatorZeroOrOne();
        const m = Math.floor(Math.random() * 4);
        const n = Math.floor(Math.random()* 5);
        const o = generatorController.generatorZeroOrOne();
        const agent = await Agent.findByPk(i, {
            include: ["role", {
                model: Weapon,
                as: "weapons",
                include: "type"
            }]
        });
        res.render("medium", { agent, i, j, k, l, m, n, o})
    },
    async renderHard(req, res) {
        const i = generatorController.generatorAgent();
        const k = generatorController.generatorWeapon();
        let l = generatorController.generatorWeapon();
        while (l === k) {
            l = generatorController.generatorWeapon();
          }
        let m = generatorController.generatorWeapon();
        while (m === k || m === l) {
            m = generatorController.generatorWeapon();
          }
        const n = Math.floor(Math.random() * 4);
        const agent = await Agent.findByPk(i, {
            include: ["role", "skills",{
                model: Weapon,
                as: "weapons",
                include: "type"
            }]
        });
        res.render("hard", { agent, k, l, m, n })
    },
    async renderValorant(req, res) {
        const i = generatorController.generatorAgent();
        const j = generatorController.generatorWeapon();
        const k = Math.floor(Math.random() * 4);
        const agent = await Agent.findByPk(i, {
            include: ["role", "skills", {
                model: Weapon,
                as: "weapons",
                include: "type"
            }]
        });
        res.render("valorant", { agent, j, k })
    },
    async renderPersonalisation(req, res) {
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
        res.render("personalisation", { agents, i , j , k , l , m })
    }
}


module.exports = generatorController;