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
} else {
    console.log("Nome incorreto")
}

// if else else if (encadeado/alinhado)

let idade = 18;

if (idade <= 13){
    console.log("é uma criança")
} else if (idade >= 13 && idade <= 17){
    console.log('é um aborrecente')
} else if (idade >= 18 && idade <= 50){
    console.log("É um Adulto")
} else {
    console.log("é um idoso")
}

// condiçao ternaria

let numero2 = 150;

let resultado = numero2 == 100 ? "Correto" : "Errado";

console.log(resultado
)

// condição switch case

const pratos = 'lasanhas';

switch(pratos){
    case "Macarrão":
        console.log("O melhor Macarrão");
        break;
    case "Salada":
        console.log("Salada Saudável");
        break;
    case 'lasanhas':
        console.log("O melhor prato de Massa")
        break;
    default:
        console.log("Nenhum prato escolhido")
}

// crie um programa que diga se os valores z e f são verdadeiros

let valorexc1 = "z";
let valorexc2 = 'f';
if(valorexc1 == valorexc2){
    console.log("É verdadeiro")
} else {
    console.log("Não é verdadeiro")
}

// crie um progreama que verifique se a pessoa pode beber bebida alcoolica (encadeado)
//maior de 18 pode beber, menor não pode, e maior de 70 moderado

let idadeexc = 18;

if (idadeexc <= 18){
    console.log("Menor de idade, não pode beber")
} else if (idade >=18){
    console.log("Pode beber")
} else if (idade >=70){
    console.log("Pode beber moderadamente")
}

let carro = 'fusca';

switch(carro){
    case "Brasilia":
        console.log("O carro escolhido foi uma Brasilia");
        break;
    case "Kombi":
        console.log("O carro escolhido foi uma Kombi");
        break;
    case 'Variant':
        console.log("O carro escolhido foi um variant")
        break;
    default:
        console.log("Nenhum carro foi escolhido")
}

let salario = 1400;

let resultadosalario = salario == 1400 ? "Correto" : "Errado";

console.log(resultadosalario
)
