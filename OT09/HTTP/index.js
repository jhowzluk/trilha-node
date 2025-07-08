import express from 'express';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Adiciona suporte a JSON no corpo da requisição

let carros = ['fiesta', 'saveiro'];

app.get('/', (req, res) =>
  res.send("<h3>Rotas no Express</h3><p>Rota '/'</p>")
);

app.get('/sobre', (req, res) =>
  res.send("<h3>Rota Sobre Novo</h3>")
);

app.get('/users/:name', (req, res) =>
  res.send('Usuário: ' + req.params.name)
);

app.get('/cars/:id', (req, res) => {
  let id = req.params.id;
  return res.json([carros[id]]);
});

app.post('/cars/', (req, res) => {
  let name = req.body.name;
  if (!name) return res.status(400).send("Campo 'name' obrigatório.");
  carros.push(name);
  return res.json([carros[carros.length - 1]]);
});

app.listen(3000, () =>
  console.log("Servidor iniciado na porta 3000")
);


app.put('/cars/update/:id', (req, res) => {
    let name = req.body.name;
    carros[req.params.id] = name;
    return res.json(carros[req.params.id]);
});


