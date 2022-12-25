let numeral = require('numeral');
let num=10000000000.09;
let valueRound = true;
let format=valueRound?'0a':'0.00a';
let string = numeral(num).format(format);
console.log(string); 