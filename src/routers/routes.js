const express = require('express');
const router = express.Router();
const controller = require("../controllers/controllers");

router.get("/",controller.index);
router.get("/catalogo",controller.catalogo)
router.get("/producto/:id",controller.productos);
router.get("/pedir/:id",controller.pedir);
router.get("/catalogo/:id",controller.catalogoCategoria);
router.get("/admin",controller.admin);

module.exports = router;