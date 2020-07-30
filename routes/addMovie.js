const express = require("express");
const router = express.Router();

const movieController = require("../Controllers/movieController.js");

router.get("/add-movie", movieController.getAddMovie);

module.exports = router;
