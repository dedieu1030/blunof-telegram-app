const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Blunof API - Mini-App Telegram de Facturation" });
});

app.get("/health", (req, res) => {
  res.json({ status: "OK", timestamp: new Date().toISOString() });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Serveur Blunof démarré sur le port ${PORT}`);
  console.log(`📱 API disponible sur http://localhost:${PORT}`);
});
