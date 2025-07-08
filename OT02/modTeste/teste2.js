const sh = require("superheroes");
const chalk = require('chalk');



let moment = require("moment");

let time = new Date();

let parsedTime = moment(time).format("h:mm:ss");

console.log(parsedTime);

console.log(chalk.blue(parsedTime));