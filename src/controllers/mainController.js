

const mainController = {
  //Render de la première page d'acces
    async renderIndexPage(req, res) {
    res.render("index");
  },
  // Render de la page home
  async renderHomePage(req, res) {
    // On récupère les quizs sur la base de donnée (await)
    res.render("home");
  },


}

module.exports = mainController;