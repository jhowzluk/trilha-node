import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());

let carros = [
    { id: 1, nome: "Civic", preco: 40000, marca: "Honda" },
    { id: 2, nome: "Corolla", preco: 42000, marca: "Toyota" },
    { id: 3, nome: "City", preco: 38000, marca: "Honda" },
    { id: 4, nome: "Gol", preco: 30000, marca: "Volkswagem" },
    { id: 5, nome: "Astra", preco: 36000, marca: "Chevrolet" },
    { id: 6, nome: "Argo", preco: 32000, marca: "Fiat" },
];

app.get('/carros', (req, res) => {
    res.json(carros);
});

app.get('/carros/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const carro = carros.find(c => c.id === id);
    if (!carro) {
        return res.status(404).json({ erro: "Carro não encontrado" });
    }
    res.json(carro);
});

app.post('/carros', (req, res) => {
    const { nome, preco, marca } = req.body;
    let id;
    if (carros.length > 0) {
        id = carros[carros.length - 1].id + 1;
    } else {
        id = 1;
    }
    const novoCarro = { id, nome, preco, marca };
    carros.push(novoCarro);
    res.status(201).json(novoCarro);
});

app.put('/carros/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { nome, preco, marca } = req.body;
    let carro = carros.find(c => c.id === id);
    if (!carro) {
        return res.status(404).json({ erro: "Carro não encontrado" });
    }
    carro.nome = nome ?? carro.nome;
    carro.preco = preco ?? carro.preco;
    carro.marca = marca ?? carro.marca;
    res.json(carro);
});

app.delete('/carros/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = carros.findIndex(c => c.id === id);
    if (index === -1) {
        return res.status(404).json({ erro: "Carro não encontrado" });
    }
    const removido = carros.splice(index, 1);
    res.json(removido[0]);
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
