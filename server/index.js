const express = require("express"); const app = express(); app.get("/", (req, res) => res.json({message: "Blunof API"})); app.listen(process.env.PORT || 3001);
