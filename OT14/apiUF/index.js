import express from 'express';
import { buscarUfPorId, buscarUfs, buscarUfPorNome } from '../apiUF/Serviços/servicos.js';

const app = express();

app.get('/ufs', (req, res) => {
    const nomeUf = req.query.busca;
    const resultado = nomeUf ? buscarUfPorNome(nomeUf) : buscarUfs();
    if (resultado.length > 0) {
        res.status(200).json(resultado);
    } else {
        res.status(404).send({ "erro": "Nenhuma UF encontrada com o critério de busca fornecido." });
    }
});

app.get('/ufs/:iduf', (req, res) => {
    const uf = buscarUfPorId(req.params.iduf);
    if (uf) {
        res.status(200).json(uf);
    } else if (isNaN(parseInt(req.params.iduf))) {
        res.status(400).send({ "erro": "O ID da UF deve ser um número." });
    } else {
        res.status(404).send({ "erro": "UF não encontrada." });
    }
});

app.listen(8080, () => {
    console.log('Servidor rodando na porta 8080');
});