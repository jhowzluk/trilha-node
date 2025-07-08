const express = require("express");
const app = express();

// Adicione isto logo após o app ser criado
app.use(express.json());

// Agora suas rotas
app.listen(3000, () => {
  console.log("Servidor Rodando");
});

let games = [
  { title: "Sea of Thieves", studio: "Rare", price: 30 },
  { title: "Halo", studio: "Microsoft", price: 40 },
];

app.get("/", (req, res) => {
  res.json(games);
});

app.post("/novogame", (req, res) => {
  let title = req.body.title;
  let studio = req.body.studio;
  let price = req.body.price;

  let newGame = { title, studio, price };

  games.push(newGame);

  res.send("OK");
});
