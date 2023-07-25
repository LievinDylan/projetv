const { Agent } = require('../models');
const { Weapon } = require('../models');

const customController = {
    // Render de la page de personnalisation
    renderCustomPage(req, res) {
        res.render("custom");
    },
    // Render de la page pour 5 joueurs ou moins
    async getPlayersCustom(req, res) {
      const numberOfAgents = 22;
      const numberOfPlayers = req.session.players || 1;
      // Team 1
      const selectedAgents = [];


      // Sélection aléatoire d'agents uniques pour chaque joueur de la Team 1
      for (let currentPlayer = 1; currentPlayer <= numberOfPlayers; currentPlayer++) {
        let randomIndex = Math.floor(Math.random() * numberOfAgents);
        while (selectedAgents.includes(randomIndex)) {
          randomIndex = Math.floor(Math.random() * numberOfAgents);
        }
        selectedAgents.push(randomIndex);
        // Ajout des différents index d'agent à la session suivant le joueur (playerIndex1, playerIndex2..)
        req.session['playerIndex' + currentPlayer] = randomIndex;
      }
      
      //Création d'un tableau pour stocker les noms des joueurs !
      const firstTeam = [];
      firstTeam.push(req.session.playerone, req.session.playertwo, req.session.playerthree, req.session.playerfour, req.session.playerfive)
      console.log(firstTeam)

      // Requête pour récuperer tous les agents dans la BDD
      const agents = await Agent.findAll();
        res.render("oneteam", { agents, firstTeam,    
          numberOfPlayers,
          req })
    },
    // Render du POST de la page 'custom' afin de récuperer les inputs du body ainsi que le nombre de joueurs séléctionné 
    getNbAndNameOfPlayers(req, res) {
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