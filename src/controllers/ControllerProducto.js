const Producto = require('../models/modelProducto');

// validaciones
const datosValidados = d => d.nombre && Number(d.precio) > 0 && Number(d.stock) >= 0;
const idValid = id => Number(id) > 0;

async function listarProductos(req, res) {
  try {
    res.json(await Producto.listarProductos());
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

async function obtenerProductoPorId(req, res) {
  try {
    const id = req.params.id;
    if (!idValid(id)) {
      return res.status(400).json({ error: 'ID inválido' });
    }
    const producto = await Producto.obtenerProductoPorId(id);
    if (!producto) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }
    res.json(producto);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

async function crearProducto(req, res) {
  const { nombre, precio, stock } = req.body;
  if (!datosValidados({ nombre, precio, stock })) {
    return res.status(400).json({ error: 'Datos inválidos' });
  }
  res.status(201).json(await Producto.crearProducto(nombre, precio, stock));
}

async function actualizarProducto(req, res) {
  const id = req.params.id;
  const { nombre, precio, stock } = req.body;
  res.json(await Producto.actualizarProducto(id, nombre, precio, stock));
}

async function eliminarProducto(req, res) {
  const id = req.params.id;
  res.json(await Producto.eliminarProducto(id));
}

module.exports = {
  listarProductos,
  obtenerProductoPorId,
  crearProducto,
  actualizarProducto,
  eliminarProducto
};