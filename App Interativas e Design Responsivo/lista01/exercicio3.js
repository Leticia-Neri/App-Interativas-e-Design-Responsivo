"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
var base = rs.question('Digite o primeiro nota');
var altura = rs.question('Digite o primeiro nota');
var area = (base * altura) / 2;
console.log(area);
