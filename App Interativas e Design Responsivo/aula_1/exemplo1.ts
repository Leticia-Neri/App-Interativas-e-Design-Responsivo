import * as rs from 'readline-sync';

/*
const message: string = 'Olá mundo';
console.log(message);

let n: number;
n = 0;

const flag: boolean = true;

let qualquerCoisa : any;


const nome: string = rs.question('Digite seu nome: ');
console.log('Olá, ' + nome); 



const idade = Number(rs.question('Digite sua idade: '));



//ex 1 
let num1 = Number(rs.question('Digite o 1 numero: '));
let num2 = Number(rs.question('Digite o 2 numero: '));
let num3 = Number(rs.question('Digite o 3 numero: '));

let produto = num1*num2*num3;
console.log('O resultado é ' + produto);


//ex 2

let num1 = Number(rs.question('Digite o 1 nota: '));
let num2 = Number(rs.question('Digite o 2 nota: '));
let num3 = Number(rs.question('Digite o 3 nota: '));

let mediaP = (num1*2 + num2*3 + num3*5)/ (2+3+5);

console.log('O resultado é ' + mediaP);


//ex 3


let base = Number(rs.question('Digite a base'));
let altura = Number(rs.question('Digite a altura'));

let area = (base * altura)/2;


console.log('A area do triangulo é ' + area);

*/

//ex 4 

let C = Number(rs.question('Digite a temp em Celsius: '));

let K = C + 273.15;

let F = (C*1.8) + 32;

console.log('A temp em Frahen é \n' + F + ' A temp em Kelvin é ' + K);

//ex 5 

let tempo = Number(rs.question('Quanto tempo voce joga por dia? '));

let dias= Number(rs.question('Quantos dias você joga?'));

let horas = tempo*dias*52;

console.log(horas);





