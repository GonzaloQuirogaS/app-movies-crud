const Movie = require("../database/Movie");
const { v4: uuid } = require("uuid");

const getAllMovies = () => {
  const allMovies = Movie.getAllMovies();
  return allMovies;
};

const getMovieById = (id) => {
  try {
    const movie = Movie.getMovieById(id);
    return movie;
  } catch (error) {
    throw error;
  }
};

const createMovie = (newMovie) => {
  const movieToInsert = {
    id: uuid(),
    ...newMovie,
  };

  try {
    const createdMovie = Movie.createMovie(movieToInsert);
    return createdMovie;
  } catch (error) {
    throw error;
  }
};

const updateMovieById = () => {
  return;
};
const deleteMovieById = () => {
  return;
};

module.exports = {
  getAllMovies,
  createMovie,
  getMovieById,
};
