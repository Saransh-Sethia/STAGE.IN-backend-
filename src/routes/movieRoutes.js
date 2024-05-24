const express = require('express');
const router = express.Router();
const movieController = require("../controllers/movieController");
const authenticateToken = require('../middlewares/authenticateToken');

router.post("/", authenticateToken, movieController.createMovie);

router.get("/", authenticateToken, movieController.getAllMovies);

router.get("/paginate", authenticateToken, movieController.limitMovies);

router.delete("/:id", authenticateToken, movieController.deleteMovie);

module.exports = router;