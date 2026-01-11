const express = require("express");
const router = express.Router();
const encomendaController = require("../controllers/encomenda.controller");

// página "Encomendas" do menu
router.get("/", (req, res) => {
  res.render("pages/encomendas", {
    titulo: "Encomendas"
  });
});

// página de sucesso da encomenda
router.get("/sucesso", encomendaController.sucesso);

module.exports = router;
