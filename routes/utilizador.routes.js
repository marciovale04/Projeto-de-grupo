const express = require("express");
const router = express.Router();
const utilizadorController = require("../controllers/utilizador.controller");

router.get("/", utilizadorController.list);
router.get("/:id", utilizadorController.getById);
router.post("/", utilizadorController.create);
router.put("/:id", utilizadorController.update);
router.delete("/:id", utilizadorController.delete);
router.post("/", utilizadorController.create);


module.exports = router;
