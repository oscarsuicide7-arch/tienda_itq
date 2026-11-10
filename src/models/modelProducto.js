const pool = require('../config/db.js');

async function listarProductos(){
  const r = await pool.query('SELECT * FROM tienda_online.productos ORDER BY id');
  return r.rows;
}

async function obtenerProductoPorId(id){
  const r = await pool.query('SELECT * FROM tienda_online.productos WHERE id = $1', [id]);
  return r.rows[0];
}

async function crearProducto(nombre, precio, stock){
  const r = await pool.query('INSERT INTO tienda_online.productos (nombre, precio, stock) VALUES ($1, $2, $3) RETURNING *', [nombre, precio, stock]);
  return r.rows[0];
}

async function actualizarProducto(id, nombre, precio, stock){
  const r = await pool.query('UPDATE tienda_online.productos SET nombre = $1, precio = $2, stock = $3 WHERE id = $4 RETURNING *', [nombre, precio, stock, id]);
  return r.rows[0];
}

async function eliminarProducto(id){
  const r = await pool.query('DELETE FROM tienda_online.productos WHERE id = $1 RETURNING *', [id]);
  return r.rows[0];
}

module.exports = { listarProductos, obtenerProductoPorId, crearProducto, actualizarProducto, eliminarProducto }