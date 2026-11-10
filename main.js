require('dotenv').config();
const app = require('./src/app.js');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor listo en http://localhost:${PORT}`);
});