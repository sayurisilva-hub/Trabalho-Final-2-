const mongoose = require("mongoose");

const VendaSchema = new mongoose.Schema({
  cliente: { type: mongoose.Schema.Types.ObjectId, ref: "Cliente", required: true },
  produto: { type: mongoose.Schema.Types.ObjectId, ref: "Produto", required: true }
});

module.exports = mongoose.model("Venda", VendaSchema);
