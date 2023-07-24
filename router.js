const { Router } = require("express");
const mainController = require("./src/controllers/mainController");
const agentController = require("./src/controllers/agentController");
const generatorController = require("./src/controllers/generatorController");
const arsenalController = require("./src/controllers/arsenalController");
const customController = require("./src/controllers/customController");

const router = Router();

router.get("/", mainController.renderIndexPage);
router.get("/home", mainController.renderHomePage);
router.get("/agents", agentController.renderAllAgents);
router.get("/agents/:id", agentController.renderAgent);
router.get("/generator", generatorController.renderGenerator);
router.get("/generator/easy", generatorController.renderEasy);
router.get("/generator/medium", generatorController.renderMedium);
router.get("/generator/hard", generatorController.renderHard);
router.get("/generator/valorant", generatorController.renderValorant);
router.get("/generator/personalisation", generatorController.renderPersonalisation);
router.get("/arsenal", arsenalController.renderArsenal);
router.get("/generator/custom", customController.renderCustomPage);
router.post("/generator/custom", customController.renderCustomOneTeam);

module.exports = router;
