const { Agent } = require('../models');
const { Weapon } = require('../models');

const customController = {
    renderCustomPage(req, res) {
        res.render("custom");
    },
    async renderCustomOneTeamPage(req, res) {
      const numberOfAgents = 22;
      const numberOfPlayers = req.session.players || 1;
      // Team 1
      const selectedAgents = [];
      // Team 2
      const selectedAgentsBis = [];


      // Sélection aléatoire d'agents uniques pour chaque joueur de la Team 1
      for (let currentPlayer = 1; currentPlayer <= numberOfPlayers; currentPlayer++) {
        let randomIndex = Math.floor(Math.random() * numberOfAgents);
        while (selectedAgents.includes(randomIndex)) {
          randomIndex = Math.floor(Math.random() * numberOfAgents);
        }
        selectedAgents.push(randomIndex);
        req.session['playerIndex' + currentPlayer] = randomIndex;
      }
      
      //Création d'un tableau pour stocker les noms des joueurs !
      const firstTeam = [];
      firstTeam.push(req.session.playerone, req.session.playertwo, req.session.playerthree, req.session.playerfour, req.session.playerfive)
      console.log(firstTeam)

      const agents = await Agent.findAll();
        res.render("oneteam", { agents, firstTeam,    
          numberOfPlayers,
          req })
    },
    renderCustomOneTeam(req, res) {
        req.session.playerone = req.body.playerone;
        req.session.playertwo = req.body.playertwo;
        req.session.playerthree = req.body.playerthree;
        req.session.playerfour = req.body.playerfour;
        req.session.playerfive = req.body.playerfive;
        req.session.players = req.body.players
        res.redirect("/generator/oneteam");
    },

    
}

module.exports = customController;