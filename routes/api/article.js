const router = require("express").Router();
const articleController = require("../../controllers/articleController");

//api/article
router.route("/")
  .get(articleController.findAll)
  .post(articleController.create);

//api/article/:id
router
  .route("/:id")
  .get(articleController.findById)
  .put(articleController.update)
  .delete(articleController.remove);

module.exports = router;