const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

pool.on('connect', (client) => {
  client.query(`SET search_path TO ${process.env.DB_SCHEMA}, public`);
});

module.exports = pool;