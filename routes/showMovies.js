const express = require("express");
const router = express.Router();

const movieController = require("../Controllers/movieController.js");

router.get("/show-movies", movieController.getShowMovies);

module.exports = router;
