const express = require("express");
require("dotenv").config();

const dbConnect = require("./config/dbConnect");
const initRoutes = require("./routes");

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dbConnect();
initRoutes(app);

app.listen(port, () => {
  console.log("server running port" + port);
});
