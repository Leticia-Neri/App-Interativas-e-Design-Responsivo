import * as rs from 'readline-sync';

const nota1 = rs.question('Digite o primeiro nota');
const nota2 = rs.question('Digite o primeiro nota');
const nota3 = rs.question('Digite o primeiro nota');

let mediaP = (nota1*2 + nota2*3 + nota3*5)/(2+3+5);

console.log("O resultado é " + mediaP);
