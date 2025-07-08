const express = require('express');
const app = express()


app.get('/', (req, res) => {
  res.send('Bot hutao esta ativo')
})

const port = process.env.PORT || 3000;


app.listen(port, () => {
  console.log(`servidor on port ${port}`)
})