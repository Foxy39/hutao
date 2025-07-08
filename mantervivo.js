const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('🟢 Hutao Bot rodando com sucesso!');
});

app.listen(PORT, () => {
  console.log(`✅ Servidor Express rodando na porta ${PORT}`);
});