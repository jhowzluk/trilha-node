const fs = require("fs");

// Usando writeFileSync para sobrescrever o conteúdo do arquivo
const nomeArquivo = 'ArquivoNovoRenomeado.txt';
const conteudoArquivo = 'Olá Node.JS! UNISENAI 2023\n';
fs.writeFileSync(nomeArquivo, conteudoArquivo);

// Usando appendFile para adicionar conteúdo ao arquivo
fs.appendFile('ArquivoNovoRenomeado.txt', 'Linha adicional com appendFile\n', function (err) {
  if (err) throw err;
  console.log('Arquivo salvo');
});

console.log('Executando o script...');

fs.unlink(nomeArquivo, function (err) {
  if (err) {
    console.error('Erro ao deletar o arquivo:', err);
    return;
  }
  console.log('Arquivo deletado com sucesso!');
});
