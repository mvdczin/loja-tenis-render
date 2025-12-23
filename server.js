const express = require("express");
const app = express();
const PORT = process.env.PORT || 10000;

// Servir pasta 'public' corretamente
app.use(express.static("public"));

// Rotas HTML
app.get("/", (req, res) => res.sendFile(__dirname + "/index.html"));
app.get("/produto", (req, res) => res.sendFile(__dirname + "/produto.html"));
app.get("/login", (req, res) => res.sendFile(__dirname + "/login.html"));
app.get("/register", (req, res) => res.sendFile(__dirname + "/register.html"));
app.get("/dashboard", (req, res) => res.sendFile(__dirname + "/dashboard.html"));
app.get("/admin", (req, res) => res.sendFile(__dirname + "/admin.html"));

app.listen(PORT, () => console.log("🚀 Frontend servido corretamente"));
