const express = require("express");
const pool = require("./db");
const app = express();

app.use(express.json());
app.use(express.static("public"));

const ADMIN_SENHA = "1234";

app.get("/api/pedido/:codigo", async (req, res) => {
  const result = await pool.query(
    "SELECT * FROM pedidos WHERE codigo_pedido = $1",
    [req.params.codigo]
  );
  res.json(result.rows[0]);
});

app.post("/api/admin/update", async (req, res) => {
  const { senha, codigo, pago, rastreio } = req.body;
  if (senha !== ADMIN_SENHA) return res.sendStatus(401);

  await pool.query(
    "UPDATE pedidos SET pago=$1, rastreio=$2 WHERE codigo_pedido=$3",
    [pago, rastreio, codigo]
  );
  res.json({ ok: true });
});

app.listen(3000);
