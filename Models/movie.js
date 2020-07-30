const fs = require("fs");
const path = require("path");

const products = [];

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "movies.json"
);

module.exports = class Movie {
  constructor(m) {
    this.movie = m;
  }

  addMovie() {
    products.push(this.movie);
    fs.writeFile(p, JSON.stringify(products), (err) => {
      throw err;
    });
  }

  static renderMovies() {
    const p = fs.readFileSync(p);
    console.log(p);
  }
};
