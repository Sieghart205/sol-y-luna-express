const express = require('express');
const router = express.Router();
const controller = require("../controllers/controllers");

router.get("/",controller.index);
router.get("/catalogo",controller.catalogo)
router.get("/producto/:id",controller.productos);
router.get("/pedir/:id",controller.pedir);
router.get("/catalogo/:id",controller.catalogoCategoria);
router.get("/admin",controller.adminLogin);
router.post("/admin",controller.admin);
router.get("/carrito",controller.carritoAdmin);
router.get("/login",controller.login);
router.post("/register",controller.register);
router.post("/carrito",controller.carrito);
router.get("/add/:id",controller.carritoGet);
router.post("/add",controller.add);

module.exports = router;