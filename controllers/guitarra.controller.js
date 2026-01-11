const Guitarra = require("../models/guitarra.model");

const guitarraController = {

  list: async (req, res) => {
    try {
      const guitarras = await Guitarra.getAll();

      res.render("pages/guitarras", { guitarras });
    } catch (error) {
      res.status(500).send("Erro ao carregar guitarras");
    }
  },

  getById: async (req, res) => {
    try {
      const guitarra = await Guitarra.getById(req.params.id);
      if (!guitarra) {
        return res.status(404).json({ message: "Guitarra não encontrada" });
      }
      res.json(guitarra);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  personalizarForm: async (req, res) => {
    try {
      const guitarra = await Guitarra.getById(req.params.id);

      if (!guitarra) {
        return res.status(404).send("Guitarra não encontrada");
      }

      res.render("pages/personalizar", { guitarra });
    } catch (error) {
      res.status(500).send("Erro ao carregar personalização");
    }
  },

};

module.exports = guitarraController;
