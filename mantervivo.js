const express = require("express");
const { exec } = require("child_process");

const app = express();
const PORT = process.env.PORT || 3000;

// Rota para o UptimeRobot verificar
app.get("/", (req, res) => {
  res.send("✅ Bot está online e funcionando!");
});

// Inicia o servidor web
app.listen(PORT, () => {
  console.log(`🌐 Servidor Express rodando na porta ${PORT}`);

  // Executa o start.sh para rodar o index.js criptografado
  const bot = exec("bash start.sh");

  bot.stdout.on("data", (data) => {
    console.log(`[BOT] ${data}`);
  });

  bot.stderr.on("data", (data) => {
    console.error(`[ERRO] ${data}`);
  });
});