const input = require('readline-sync');

// EXERCÍCIO 1
function saudacao(nome) {
  return `Olá, ${nome}! Bons estudos.`;
}
const nomeUsuario = input.question("Nome: ");
console.log(saudacao(nomeUsuario));

// EXERCÍCIO 2
function ehPar(numero) {
  return numero % 2 === 0;
}
const num = Number(input.question("Numero para testar par: "));
if (ehPar(num)) {
  console.log("É par");
} else {
  console.log("É ímpar");
}

// EXERCÍCIO 3
function calcularMedia(n1, n2, n3) {
  return (n1 + n2 + n3) / 3;
}
function situacao(media) {
  if (media >= 7) return "Aprovado";
  if (media >= 5) return "Recuperacao";
  return "Reprovado";
}
const nota1 = Number(input.question("Nota 1: "));
const nota2 = Number(input.question("Nota 2: "));
const nota3 = Number(input.question("Nota 3: "));
const media = calcularMedia(nota1, nota2, nota3);
console.log(`Média: ${media} - Situação: ${situacao(media)}`);

// EXERCÍCIO 4
function soma(a, b) { return a + b; }
function subtrai(a, b) { return a - b; }
function multiplica(a, b) { return a * b; }
function divide(a, b) {
  if (b === 0) return "erro -- divisao por zero!";
  return a / b;
}
const n1 = Number(input.question("Numero 1: "));
const n2 = Number(input.question("Numero 2: "));
console.log("Soma:", soma(n1, n2));
console.log("Subtrai:", subtrai(n1, n2));
console.log("Multiplica:", multiplica(n1, n2));
console.log("Divide:", divide(n1, n2));

// EXERCÍCIO 5
function triploDeclaracao(x) { return x * 3; }
const triploExpressao = function(x) { return x * 3; };
const triploArrow = x => x * 3;
console.log(triploDeclaracao(5));
console.log(triploExpressao(5));
console.log(triploArrow(5));

// EXERCÍCIO 6
function fatorial(n) {
  let resultado = 1;
  for (let i = 1; i <= n; i++) {
    resultado = resultado * i;
  }
  return resultado;
}
const numFat = Number(input.question("Numero para fatorial: "));
console.log("Fatorial:", fatorial(numFat));

// EXERCÍCIO 7
function ehPrimo(n) {
  if (n < 2) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
const limite = Number(input.question("Limite N: "));
for (let i = 2; i <= limite; i++) {
  if (ehPrimo(i)) console.log(i);
}



// EXERCÍCIO 4: CALCULADORA

function soma(a, b) { 
    return a + b; 
}

function subtrai(a, b) { 
    return a - b; 
}

function multiplica(a, b) { 
    return a * b; 
}

function divide(a, b) {
    if (b === 0) {
        return "Não dá para dividir por zero";
    }
    return a / b;
}

console.log("--- Teste Ex 4 ---");
console.log(soma(10, 5));       
console.log(divide(10, 0));     



// EXERCÍCIO 5: TRÊS FORMAS DE FUNÇÃO

function triploDeclaracao(x) {
    return x * 3;
}

const triploExpressao = function(x) {
    return x * 3;
};

const triploArrow = (x) => x * 3;

console.log("--- Teste Ex 5 ---");
console.log(triploDeclaracao(4)); 
console.log(triploExpressao(4));  
console.log(triploArrow(4));      



// EXERCÍCIO 6: FATORIAL

function fatorial(n) {
    let resultado = 1;
    for (let i = 1; i <= n; i++) {
        resultado = resultado * i;
    }
    return resultado;
}

console.log("--- Teste Ex 6 ---");
console.log(fatorial(5)); 



// EXERCÍCIO 7: NÚMEROS PRIMOS

function ehPrimo(n) {
    if (n < 2) return false;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false; 
        }
    }
    return true; 
}

console.log("--- Teste Ex 7 (Primos até 20) ---");
let limite = 20; 
for (let i = 2; i <= limite; i++) {
    if (ehPrimo(i)) {
        console.log(i); 
    }
}