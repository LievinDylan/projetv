const { Router } = require("express");
const mainController = require("../controllers/mainController");
const agentController = require("../controllers/agentController");
const generatorController = require("../controllers/generatorController");
const arsenalController = require("../controllers/arsenalController");
const customController = require("../controllers/customController");
const middleware404 = require("../middlewares.js/middleware404");
const cw = require("./controllerWrapper");

const router = Router();

// Render des pages home/index
router.get("/", cw(mainController.renderIndexPage));
router.get("/home", cw(mainController.renderHomePage));

// Render des pages agents/agent
router.get("/agents", cw(agentController.getAllAgents));
router.get("/agents/:id", cw(agentController.getOneAgent));

//Render de la page des armes
router.get("/arsenal", cw(arsenalController.getAllWeapons));

// Render des pages du générateur : Facile / Intermédiaire / Difficle / Valorant
router.get("/generator", cw(generatorController.renderGenerator));
router.get("/generator/easy", cw(generatorController.getEasyLevel));
router.get("/generator/medium", cw(generatorController.getMediumLevel));
router.get("/generator/hard", cw(generatorController.getHardLevel));
router.get("/generator/valorant", cw(generatorController.getValorantLevel));

// Render des pages personnalisées
router.get("/generator/custom", cw(customController.renderCustomPage));
router.get("/generator/oneteam", cw(customController.getPlayersCustom));
// Route POST pour la récupération des noms de joueurs
router.post("/generator/custom", cw(customController.getNbAndNameOfPlayers));

// Renvoie la 404
router.use(middleware404);

module.exports = router;
