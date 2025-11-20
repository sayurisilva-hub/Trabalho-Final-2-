const mongoose = require("mongoose");
const app = require("./app");

const MONGO_URI = "mongodb+srv://sayuri:sayuri123@cluster0.oaue8gh.mongodb.net/?appName=Cluster0";

mongoose.connect(MONGO_URI)
  .then(() => console.log("MongoDB Atlas conectado!"))
  .catch(err => console.error("Erro ao conectar:", err));

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.json());
app.use(routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
