"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
var nota1 = rs.question('Digite o primeiro nota');
var nota2 = rs.question('Digite o primeiro nota');
var nota3 = rs.question('Digite o primeiro nota');
var mediaP = (nota1 * 2 + nota2 * 3 + nota3 * 5) / (2 + 3 + 5);
console.log("O resultado é " + mediaP);
