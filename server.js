const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// rota principal → site
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// rota teste da API
app.get("/api", (req, res) => {
  res.json({ status: "API da Loja Streetwear ON 🔥" });
});

app.listen(PORT, () => {
  console.log("Servidor rodando na porta " + PORT);
});
