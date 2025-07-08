let http = require("http");
let fs = require("fs");

http.createServer(function(request, response){
    fs.readFile("index.html", function(erro, conteudo){
        if (erro) {
            console.log(erro);
            response.writeHead(500, { "Content-Type": "text/plain" });
            response.end("Erro ao carregar o arquivo.");
        } else {
            response.writeHead(200, { "Content-Type": "text/html" });
            response.write(conteudo);
            response.end();
        }
    });
}).listen(8081);

console.log("Servidor Rodando em http://localhost:8081");
