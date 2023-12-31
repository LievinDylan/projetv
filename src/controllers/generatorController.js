const { Agent } = require('../models');
const { Weapon } = require('../models');

const generatorController = {
    // Méthode pour générateur d'agent aléatoire selon l'ID
    async generatorAgent(max) {
        const i = Math.floor(Math.random() * max) + 1;
        return i;
    },
    // Méthode pour générer une arme aléatoire selon son index dans le tableau de l'agent
    generatorWeapon() {
        let i = Math.floor(Math.random()* 17);
        return i;
    },
    // Méthode pour récuperer un chiffre (soit 0, soit 1)
    generatorZeroOrOne() {
        let i = Math.floor(Math.random());
        return i;
    },
    // Render de la page du générateur
    renderGenerator(req, res) {
        res.render("generator")
    },
    // Render de la page du générateur en facile
    async getEasyLevel(req, res) {
        const maxOfAgents = await Agent.count();
        const i = await generatorController.generatorAgent(maxOfAgents);

        const agent = await Agent.findByPk(i, {
            include: ["role"]
        });

        res.render("easy", { agent });
    },
    // Render de la page du générateur en intermédiaire
    async getMediumLevel(req, res) {
        const maxOfAgents = await Agent.count();
        const i = await generatorController.generatorAgent(maxOfAgents);
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
    // Render de la page du générateur en difficile
    async getHardLevel(req, res) {
        const maxOfAgents = await Agent.count();
        const i = await generatorController.generatorAgent(maxOfAgents);
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
    // Render de la page du générateur en niveau très difficile
    async getValorantLevel(req, res) {
        const maxOfAgents = await Agent.count();
        const i = await generatorController.generatorAgent(maxOfAgents);
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
    }
}


module.exports = generatorController;