const express = require("express");
const router = express.Router();
const tvController = require("../controllers/tvController");
const authenticateToken = require("../middlewares/authenticateToken");

router.post("/", authenticateToken, tvController.createTVShow);

router.get("/", authenticateToken, tvController.getAllTVShows);

router.get("/paginate", authenticateToken, tvController.limitTVShows);

router.delete("/:id", authenticateToken, tvController.deleteTVShow);

module.exports = router