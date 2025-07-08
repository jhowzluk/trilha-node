const clc = require("cli-color");

const error = clc.red.bold;
const warn = clc.yellow;
const notice = clc.blue;

const msg = clc.xterm(202).bgXterm(236);

console.log(msg("Orange text on dark gray background"));

console.log(clc.green("Mensagem Verde"));
console.log(clc.red("Mensagem red"));
console.log(clc.blue("Mensagem blue"));
console.log(clc.yellow("Mensagem Yellow"));
console.log(clc.red("red ", clc.blue("blue"), " red"));
console.log(clc.red("red"), "Plain ", clc.blue("blue"));
console.log(clc.red.bgWhite.underline("Underlined red text on white background"));
console.log(clc.red("Text in red"));

console.log(error("Error!"));
console.log(warn("Warning!"));
console.log(notice("Notice"));

// Tabela usando clc.columns
console.log(
  clc.columns([
    [clc.bold("First Name"), clc.bold("Last Name"), clc.bold("Age")],
    ["John", "Doe", 34],
    ["Martha", "Smith", 20],
    ["Jan", "Kowanski", 30]
  ])
);
