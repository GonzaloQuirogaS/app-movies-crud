const DB = require("./db.json");
const { saveToDb } = require("./utils");

const getAllMovies = () => {
  return DB.movies;
};

const createMovie = (newMovie) => {
  try {
    const isAlreadyAdded =
      DB.movies.findIndex((movie) => movie.title === newMovie.title) > -1;

    if (isAlreadyAdded) {
      throw {
        status: 400,
        message: `Movie with the title '${newMovie.title}' already exists`,
      };
    }

    DB.movies.push(newMovie);
    saveToDb(DB);

    return newMovie;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

module.exports = {
  getAllMovies,
  createMovie,
};
