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

const getMovieById = (id) => {
  try {
    const movie = DB.movies.find((movie) => movie.id == id);
    if (!movie) {
      throw {
        status: 400,
        message: `Can't find movie with the id '${id}'`,
      };
    }
    return movie;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

module.exports = {
  getAllMovies,
  createMovie,
  getMovieById,
};
