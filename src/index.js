// index.js
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("root api en marche!");
});

app.get("/ping", (req, res) => {
  res.status(200).json({ message: "Sandra est calissement belle!" });
});

app.listen(port, () => {
  console.log(`Serveur lancé sur http://localhost:${port}`);
});
