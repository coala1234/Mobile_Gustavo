const input = require('readline-sync');

// EXERCICIO 1
let nome = input.question("Nome: ");
let idade = input.question("Idade: ");
let cidade = input.question("Cidade: ");

console.log("Ola! Meu nome e " + nome +
", tenho " + idade +
" anos e sou de " + cidade);


// EXERCICIO 2
let n1 = Number(input.question("Primeiro numero: "));
let n2 = Number(input.question("Segundo numero: "));

console.log("Soma: " + (n1 + n2));
console.log("Subtracao: " + (n1 - n2));
console.log("Multiplicacao: " + (n1 * n2));

if (n2 != 0) {
    console.log("Divisao: " + (n1 / n2));
} else {
    console.log("Nao pode dividir por zero");
}


// EXERCICIO 3
let soma = 0;

for (let i = 1; i <= 5; i++) {
    let nota = Number(input.question("Digite a nota: "));
    soma += nota;
}

let media = soma / 5;

console.log("Media: " + media);

if (media >= 7) {
    console.log("Aprovado");
} else if (media >= 5) {
    console.log("Recuperacao");
} else {
    console.log("Reprovado");
}


// EXERCICIO 4
let numero = Number(input.question("Digite um numero: "));

for (let i = 1; i <= 10; i++) {
    console.log(numero + " x " + i + " = " + (numero * i));
}


// EXERCICIO 5
let pares = 0;
let impares = 0;

for (let i = 1; i <= 10; i++) {
    let num = Number(input.question("Digite um numero: "));

    if (num % 2 == 0) {
        pares++;
    } else {
        impares++;
    }
}

console.log("Pares: " + pares);
console.log("Impares: " + impares);


// EXERCICIO 6
let secreto = 42;
let tentativas = 0;
let chute;

while (chute != secreto) {
    chute = Number(input.question("Digite um numero: "));
    tentativas++;

    if (chute == secreto) {
        console.log("Acertou em " + tentativas + " tentativas");
    } else if (chute < secreto) {
        console.log("O numero e maior");
    } else {
        console.log("O numero e menor");
    }
}