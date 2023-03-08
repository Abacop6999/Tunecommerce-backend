const express = require("express");
const app = express();
const db = require("./config"); 
const models = require("./models/index");
const routes = require("./routes"); 
const cookieParser = require("cookie-parser");

app.use(express.static("build"));
app.use(express.json());
app.use(cookieParser());
app.use("/api", routes)

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use((err, req, res, next) => {
  res.status(500).send(err.message);
});

db.sync({ force: true }).then(() => {
  app.listen(3001, () => console.log("Servidor escuchando en el puerto 3001"));
});
