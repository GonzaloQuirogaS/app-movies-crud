const express = require("express");
const v1MoviesRouter = require("./v1/route/moviesRoutes");
const swaggerUI = require("swagger-ui-express");
const specs = require("./config/swagger/swagger");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/v1/movies", v1MoviesRouter);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});
