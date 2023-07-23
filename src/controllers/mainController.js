

const mainController = {
    async renderIndexPage(req, res) {
    res.render("index");
  },
  async renderHomePage(req, res) {
    // On récupère les quizs sur la base de donnée (await)
    res.render("home");
  },


}

module.exports = mainController;