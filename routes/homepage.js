const express = require("express");
const path = require("path");
const router = express.Router();

const app = express();

const moviesController = require("../Controllers/movieController.js");

router.get("/", moviesController.getHomepage);

module.exports = Router;
