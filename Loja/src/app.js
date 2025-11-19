const express = require("express");
const app = express();
const produtoRoutes = require("./routes/produtoRoutes");
const clienteRoutes = require("./routes/clienteRoutes");
const vendaRoutes = require("./routes/vendaRoutes");

app.use(express.json());

app.use("/produtos", produtoRoutes);
app.use("/clientes", clienteRoutes);
app.use("/vendas", vendaRoutes);

module.exports = app;
