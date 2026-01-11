const express = require("express");
const router = express.Router();
const guitarraController = require("../controllers/guitarra.controller");

router.get("/", guitarraController.list);
router.get("/:id/personalizar", guitarraController.personalizarForm);
router.get("/:id", guitarraController.getById);

module.exports = router;
