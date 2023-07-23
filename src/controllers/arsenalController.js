const { Weapon } = require('../models');

const arsenalController = {
    async renderArsenal(req, res) {
        const weapons = await Weapon.findAll({
            include : ["type"]
        });
        res.render("arsenal", { weapons })
    }
}

module.exports = arsenalController;