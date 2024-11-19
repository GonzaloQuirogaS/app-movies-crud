const movieService = require("../service/movieService");

const getAllMovies = (req, res) => {
  const allMovies = movieService.getAllMovies();
  res.send({ status: "OK", data: allMovies });
};

const getMovieById = (req, res) => {
  const movie = movieService.getMovieById(req.params.id);
  res.send("Get movie by ID");
};

const createMovie = (req, res) => {
  const createdMovie = movieService.createMovie(req.params.id);
  res.send("Create movie");
};

const updateMovieById = (req, res) => {
  const updateMovie = movieService.updateMovieById(req.params.id);
  res.send("Update movie");
};

const deleteMovieById = (req, res) => {
  movieService.deleteMovieById(req.params.id);
  res.send("Delete movie");
};

module.exports = {
  getAllMovies,
  getMovieById,
  createMovie,
  updateMovieById,
  deleteMovieById,
};
