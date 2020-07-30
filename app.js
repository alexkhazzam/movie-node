const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

bodyParser.urlencoded({ extended: false });

app.set("view engine", "ejs");
app.set("views", "views");

const homepageRoute = require("./routes/homepage");
const addMovieRoute = require("./routes/addMovie");
const showMoviePage = require("./routes/showMovies");
const errPage = require("./Controllers/404");

app.use(express.static(path.join(__dirname, "public")));

app.use(homepageRoute);
app.use(addMovieRoute);
app.use(showMoviePage);
app.use(errPage.get404);

app.listen(5000);
