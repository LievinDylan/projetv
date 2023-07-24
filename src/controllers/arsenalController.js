const { Weapon } = require('../models');

const arsenalController = {
    // Render toutes les armes
    async renderArsenal(req, res) {
        const weapons = await Weapon.findAll({
            include : ["type"]
        });
        res.render("arsenal", { weapons })
    }
}

module.exports = arsenalController;