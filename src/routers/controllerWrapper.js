function controllerWrapper(mdw) {
    return async (req, res, next) => {
      try {
        await mdw(req, res, next);
      } catch (error) {
        console.error(error); 
        res.status(500).render('500', {error : "Problème serveur : La page que vous recherchez n'existe pas ou n'est plus disponible"})
      }
    };
  }
  
  module.exports = controllerWrapper;