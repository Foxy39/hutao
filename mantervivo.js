const express = require('express');
const app = express();


app.get('/', (req, res) => {
  res.send('Bot hutao esta ativo')
});

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
  console.log(`servidor on port ${PORT}`)
});