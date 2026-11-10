const pool = require('../config/db');

const getAll = async () => {
  const result = await pool.query('SELECT * FROM tienda_online.productos');
  return result.rows;
};

module.exports = { getAll };