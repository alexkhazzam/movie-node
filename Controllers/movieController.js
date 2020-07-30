exports.getHomepage = (req, res, next) => {
  res.render("add-product");
};

exports.getAddMovie = (req, res, next) => {
  res.render("addMovie");
};

exports.getShowMovies = (req, res, next) => {
  res.render("showMovies");
};
