const express = require("express");
const router = express.Router();
const movieController = require("../../controller/movieController");

router.get("/", movieController.getAllMovies);

router.get("/:id", movieController.getMovieById);

router.post("/", movieController.createMovie);

router.patch("/:id", movieController.updateMovieById);

router.delete("/:id", movieController.deleteMovieById);

module.exports = router;
