import colecaoUf from '../Dados/dados.js';

export const buscarUfs = () => {
  return colecaoUf;
};

export const buscarUfPorNome = (nome) => {
    return colecaoUf.filter(uf => uf.nome.toLowerCase().includes(nome.toLowerCase()));
};

export const buscarUfPorId = (id) => {
    const idUf = parseInt(id);
    return colecaoUf.find(item => item.id === idUf);
};