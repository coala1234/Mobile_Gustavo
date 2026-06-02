let nome = "GUsta";
 let idade = 18;
 let cidade = "cascavel";
 function Tabuada(num){
    for (let i = 1; i <= 10; i++){
        console.log(`${num} X ${i} = ${num * i }`);
    }
 }
 function Classificar(n){
if (n >= 7){
  return "aprovado";    
}
else if (n >= 5){
    return "recuperação";
}
else{ function Classificar(n){
if (n >= 7){
  return "aprovado";    
}
else if (n >= 5){
    return "recuperação";
}
else{
    return "reprovado";
}
 }
    return "reprovado";
}
 }
 console.log(`aluno: ${nome}, idade: ${idade}, cidade: ${cidade}`);

 const multiplicacao = (x, y) => x * y;
 const soma = (x, y) => x + y;
 const subtracao = (x, y) => x - y;
 const divisao = (x, y) => x / y;

 console.log(`Soma : ${ soma (10 , 5) } `) ;
 console.log(`multiplicacao : ${ multiplicacao (10 , 5) } `) ;
 console.log(`subtração : ${ subtracao (10 , 5) } `) ;
 console.log(`divisao : ${ divisao (10 , 5) } `) ;
console.log( Classificar (6))

console.log(Tabuada(2))
