const express = require('express');
const router = express.Router();
const control = require('../controllers/ControllerProducto.js');

router.get('/', control.listarProductos);
router.get('/:id', control.obtenerProductoPorId);
router.post('/', control.crearProducto);
router.put('/:id', control.actualizarProducto);
router.delete('/:id', control.eliminarProducto);

module.exports = router;