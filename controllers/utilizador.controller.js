const Utilizador = require("../models/utilizador.model");

const utilizadorController = {

  list: async (req, res) => {
    try {
      const utilizadores = await Utilizador.getAll();
      res.json(utilizadores);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getById: async (req, res) => {
    try {
      const utilizador = await Utilizador.getById(req.params.id);
      if (!utilizador) {
        return res.status(404).json({ message: "Utilizador não encontrado" });
      }
      res.json(utilizador);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  create: async (req, res) => {
    try {
      const novoUtilizador = await Utilizador.create(req.body);
      res.status(201).json(novoUtilizador);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  update: async (req, res) => {
    try {
      const utilizador = await Utilizador.update(req.params.id, req.body);
      if (!utilizador) {
        return res.status(404).json({ message: "Utilizador não encontrado" });
      }
      res.json(utilizador);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  delete: async (req, res) => {
    try {
      const utilizador = await Utilizador.delete(req.params.id);
      if (!utilizador) {
        return res.status(404).json({ message: "Utilizador não encontrado" });
      }
      res.json({ message: "Utilizador apagado com sucesso" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  create: async (req, res) => {
    try {
      const novoUtilizador = await Utilizador.create(req.body);
      res.status(201).json(novoUtilizador);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },



};

module.exports = utilizadorController;
