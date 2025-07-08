let SomaFunc = require("./somar");
let subFunc = require("./sub");
let divFunc = require("./div");
let multFunc = require("./mult");

let resultSub = subFunc(10,20);
let resultMult = multFunc(5,10);
let resultado = SomaFunc(7,10);
let resultDiv = divFunc(10,2);

console.log(`o resultado da Soma: ${resultado}`);
console.log(`Resultado da Divisão: ${resultDiv}`);
console.log(`Resultado da Multiplicação: ${resultMult}`);
console.log(`Resultado da Subtração: ${resultSub}`);

