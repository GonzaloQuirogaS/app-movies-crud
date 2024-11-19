const express = require("express");
const v1MoviesRouter = require("./v1/route/moviesRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/v1/movies", v1MoviesRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});
