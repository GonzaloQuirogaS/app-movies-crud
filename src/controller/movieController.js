const getAllMovies = (req, res) => {
  res.send("Get all movies");
};

const getMovieById = (req, res) => {
  res.send("Get movie by ID");
};

const createMovie = (req, res) => {
  res.send("Create movie");
};

const updateMovieById = (req, res) => {
  res.send("Update movie");
};

const deleteMovieById = (req, res) => {
  res.send("Delete movie");
};

module.exports = {
  getAllMovies,
  getMovieById,
  createMovie,
  updateMovieById,
  deleteMovieById,
};
