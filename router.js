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
router.get("/agents", agentController.renderAllAgents);
router.get("/agents/:id", agentController.renderAgent);

//Render de la page des armes
router.get("/arsenal", arsenalController.renderArsenal);

// Render des pages du générateur : Facile / Intermédiaire / Difficle / Valorant
router.get("/generator", generatorController.renderGenerator);
router.get("/generator/easy", generatorController.renderEasy);
router.get("/generator/medium", generatorController.renderMedium);
router.get("/generator/hard", generatorController.renderHard);
router.get("/generator/valorant", generatorController.renderValorant);

// Render des pages personnalisées
router.get("/generator/custom", customController.renderCustomPage);
router.get("/generator/oneteam", customController.renderCustomOneTeamPage);
// Route POST pour la récupération des noms de joueurs
router.post("/generator/custom", customController.renderCustomOneTeam);


module.exports = router;
