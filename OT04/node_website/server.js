const http = require("http");
const express = require("express");
const path = require("path");

const app = express();
const indexPath = path.join(
  __dirname,
  "..",
  "node-example-website",
  "express",
  "index.html"
);

app.get("/", (req, res) => {
  res.sendFile(indexPath, (err) => {
    if (err) {
      console.error("ERRO:", err);
      res.status(500).send("Ocorreu um erro, verifique o terminal.");
    }
  });
});

const server = http.createServer(app);
const port = 3000;

server.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
