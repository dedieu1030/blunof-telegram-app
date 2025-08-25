const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

// Routes API
app.get("/api/health", (req, res) => {
  res.json({ 
    status: "OK", 
    timestamp: new Date().toISOString(),
    message: "Blunof API - Mini-App Telegram de Facturation"
  });
});

app.get("/api/version", (req, res) => {
  res.json({ 
    version: "1.0.0",
    name: "Blunof",
    description: "Mini-app Telegram de facturation professionnelle"
  });
});

// Route de santé pour Railway
app.get("/health", (req, res) => {
  res.json({ 
    status: "OK", 
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || "development"
  });
});

// Route racine - sert l'application React
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

// Route fallback pour le routage SPA
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Serveur Blunof démarré sur le port ${PORT}`);
  console.log(`📱 API disponible sur http://localhost:${PORT}/api`);
  console.log(`🌐 Interface disponible sur http://localhost:${PORT}`);
  console.log(`🔍 Health check: http://localhost:${PORT}/health`);
});
