const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Get all movies");
});

router.get("/:id", (req, res) => {
  res.send("Get movie by ID");
});

router.post("/:id", (req, res) => {
  res.send("Create movie");
});

router.patch("/:id", (req, res) => {
  res.send("Update movie  by ID");
});

router.delete("/:id", (req, res) => {
  res.send("Delete movie by ID");
});
