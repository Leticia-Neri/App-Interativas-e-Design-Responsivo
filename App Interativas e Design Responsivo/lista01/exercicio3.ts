import * as rs from 'readline-sync';

const base = rs.question('Digite a base');
const altura = rs.question('Digite a altura');

const area = (base*altura)/2;

console.log(area);