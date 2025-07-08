import express from "express";

const app = express();

// Rota principal
app.get("/", (req, res) => {
  res.send('<h1 style="color: orange">Jhonatan Luksik da Silva</h1>');
});

// Rota 1: /sobre
app.get("/sobre", (req, res) => {
  res.send("<h2>Sobre: Este é um site feito com Express.js!</h2>");
});

// Rota 2: /contato
app.get("/contato", (req, res) => {
  res.send("<h2 >Contato: Envie um e-mail para jhonatan@email.com</h2>");
});

// Rota 3: /projetos
app.get("/projetos", (req, res) => {
  res.send("<h2>Projetos: Lista dos meus projetos em Node.js</h2>");
});

app.listen(3000, () =>
  console.log("Servidor iniciado em http://localhost:3000")
);
