const express = require("express");
const router = express.Router();

router.route("/").get((req, res) => {
  res.send("Hello from api/v1");
});

module.exports = router;
