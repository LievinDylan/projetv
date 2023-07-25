const { Router } = require("express");
const mainController = require("./src/controllers/mainController");
const agentController = require("./src/controllers/agentController");
const generatorController = require("./src/controllers/generatorController");
const arsenalController = require("./src/controllers/arsenalController");
const customController = require("./src/controllers/customController");

const router = Router();

// Render des pages home/index
router.get("/", mainController.renderIndexPage);
router.get("/home", mainController.renderHomePage);

// Render des pages agents/agent
router.get("/agents", agentController.getAllAgents);
router.get("/agents/:id", agentController.getOneAgent);

//Render de la page des armes
router.get("/arsenal", arsenalController.getAllWeapons);

// Render des pages du générateur : Facile / Intermédiaire / Difficle / Valorant
router.get("/generator", generatorController.renderGenerator);
router.get("/generator/easy", generatorController.getEasyLevel);
router.get("/generator/medium", generatorController.getMediumLevel);
router.get("/generator/hard", generatorController.getHardLevel);
router.get("/generator/valorant", generatorController.getValorantLevel);

// Render des pages personnalisées
router.get("/generator/custom", customController.renderCustomPage);
router.get("/generator/oneteam", customController.getPlayersCustom);
// Route POST pour la récupération des noms de joueurs
router.post("/generator/custom", customController.getNbAndNameOfPlayers);


module.exports = router;
