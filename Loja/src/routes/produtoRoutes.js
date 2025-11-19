const express = require("express");
const router = express.Router();
const Produto = require("../models/Produto");

router.post("/", async (req, res) => {
  const produto = await Produto.create(req.body);
  res.json(produto);
});

router.get("/", async (req, res) => {
  const produtos = await Produto.find();
  res.json(produtos);
});

router.put("/:id", async (req, res) => {
  const produto = await Produto.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(produto);
});

router.delete("/:id", async (req, res) => {
  await Produto.findByIdAndDelete(req.params.id);
  res.json({ message: "Produto removido!" });
});

module.exports = router;
