const express = require("express");
const router = express.Router();
const movieController = require("../../controller/movieController");

router.get("/", movieController.getAllMovies);

router.get("/:id", movieController.getMovieById);

router.post("/create", movieController.createMovie);

router.patch("/update/:id", movieController.updateMovieById);

router.delete("/delete/:id", movieController.deleteMovieById);

module.exports = router;
