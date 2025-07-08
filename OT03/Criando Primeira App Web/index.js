let http = require("http");

http.createServer(function(request, response){
    response.write("Bayer 7 x 1 Flamengo");
    response.end();
}).listen(8081);

console.log("Servidor Rodando em http://localhost:8081");