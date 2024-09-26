//TIPOS DE DADOS E VARIAVEIS

//valor
var exemplo = "Olá dev";
console.log(exemplo)

let exemplo2 = "Fiapinho";
console.log(exemplo2)

const exemplo3 = "Big fiap";
console.log(exemplo3);


//valor undefined
let valor;
console.log(valor)


//valor nulo
let valor1 = null;
console.log(valor1)

//valor booleano

let valor2 = false
console.log(valor2)

//valor objeto
let objeto = {};
console.log(objeto)

// array

let array = [];
console.log(array)

// conversao typeof = verifica o tipo da variavel

let numero = "123"
console.log(typeof numero)
let numeroconvertido = parseInt(numero)
console.log(numeroconvertido)

// operadores

let x = 20;
let y = 10;

// Operadores Aritméticos

console.log(x + y);
console.log(x - y);
console.log(x*y);
console.log(x/y);

//Operadores de comparação

console.log( x == y)
console.log( x === y);
console.log (x!=y);

//Operadores lógicos
console.log(x > y); // maior
console.log(x < y);// menor
console.log(x > y && y < 50); // e
console.log(x > y || y < 50); // ou

// estrutura condicional

//if

let nome = "fiap"
if(nome == 'fiap'){
    console.log("Nome correto")
}