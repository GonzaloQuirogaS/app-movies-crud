const DB = require("./db.json");

const getAllMovies = () => {
  return DB.movies;
};

module.exports = { getAllMovies };
