const express = require("express");
const router = express.Router();
const Venda = require("../models/Venda");

router.post("/", async (req, res) => {
  const venda = await Venda.create(req.body);
  res.json(venda);
});

router.get("/", async (req, res) => {
  const vendas = await Venda.find().populate("cliente produto");
  res.json(vendas);
});

router.delete("/:id", async (req, res) => {
  await Venda.findByIdAndDelete(req.params.id);
  res.json({ message: "Venda removida!" });
});

module.exports = router;
