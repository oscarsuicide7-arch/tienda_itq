const express = require('express');
const app = express();
app.use(express.json());
app.use('/api/productos', require('./routes/routesProducto.js'));
app.listen(3000, () => console.log('API en http://localhost:3000/api/productos'));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo salió mal!');
}); 

module.exports = app;   