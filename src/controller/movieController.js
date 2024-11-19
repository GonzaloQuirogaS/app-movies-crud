const movieService = require("../service/movieService");

const getAllMovies = (req, res) => {
  const allMovies = movieService.getAllMovies();
  res.send({ status: "OK", data: allMovies });
};

const getMovieById = (req, res) => {
  const {
    params: { id },
  } = req;

  if (!id) {
    res.status(400).send({
      status: "FAILED",
      data: { error: "Parameter ':id' can not be empty" },
    });
    return;
  }

  try {
    const movie = movieService.getMovieById(id);
    res.send({ status: "OK", data: movie });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const createMovie = (req, res) => {
  const { body } = req;

  //Verificar que no haya errores
  //Clausula de cierre
  if (
    !body.title ||
    !body.year ||
    !body.runtime ||
    !body.genres ||
    !body.director ||
    !body.actors ||
    !body.plot ||
    !body.posterUrl
  ) {
    res.status(400).send({
      status: "FAILED",
      data: {
        error:
          "One of the following keys is missing or is empty in request body: 'year', 'runtime', 'genres', 'director', 'actors','plot','posterUrl'",
      },
    });
  }

  const newMovie = {
    title: body.title,
    year: body.year,
    runtime: body.runtime,
    genres: body.genres,
    director: body.director,
    actors: body.actors,
    plot: body.plot,
    posterUrl: body.posterUrl,
  };

  try {
    const createdMovie = movieService.createMovie(newMovie);
    res.status(201).send({ status: "OK", data: createdMovie });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILDED", data: { error: error?.message || error } });
  }
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
