const Movie = require("../database/Movie");

const getAllMovies = () => {
  const allMovies = Movie.getAllMovies();
  return allMovies;
};
const getMovieById = () => {
  return;
};
const createMovie = () => {
  return;
};
const updateMovieById = () => {
  return;
};
const deleteMovieById = () => {
  return;
};

module.exports = {
  getAllMovies,
};
