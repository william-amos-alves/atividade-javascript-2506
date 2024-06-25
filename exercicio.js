// 1. Faça a tabuada completa utilizando o loop for.

for( let c = 1; c <= 10; c++){
    console.log(`${1} x ${c} = ${1*c}`);
}
console.log("-------")
for( let c = 1; c <= 10; c++){
    console.log(`${2} x ${c} = ${2*c}`);
}
console.log("-------")
for( let c = 1; c <= 10; c++){   
    console.log(`${3} x ${c} = ${3*c}`);
}
console.log("-------")
for( let c = 1; c <= 10; c++){
    console.log(`${4} x ${c} = ${4*c}`);
}
console.log("-------")
for( let c = 1; c <= 10; c++){
    console.log(`${5} x ${c} = ${5*c}`);
}
console.log("-------")
for( let c = 1; c <= 10; c++){
    console.log(`${6} x ${c} = ${6*c}`);
}
console.log("-------")
for( let c = 1; c <= 10; c++){    
    console.log(`${7} x ${c} = ${7*c}`);
}
console.log("-------")
for( let c = 1; c <= 10; c++){
    console.log(`${8} x ${c} = ${8*c}`);
}
console.log("-------")
for( let c = 1; c <= 10; c++){    
    console.log(`${9} x ${c} = ${9*c}`);
}

// outra opição de fazer mais facil.
/*
for(let nTab = 1; nTab < 10; nTab++) {
    console.log("-----------");
    console.log(`TABUADA DO ${nTab}`);
    console.log("-----------");
    for(let mult = 1; mult <= 10; mult++) {
        console.log(`${nTab} x ${mult} = ${nTab*mult}`);
    }
}
*/

// 2. Use um laço for para imprimir na tela a série de Fibonacci até o décimo termo.
// A sequência de Fibonacci é formada pela sequência: 0,1,1,2,3,5,8,13,21,34,55.

let a = 0, b = 1;

for (let d = 1; d < 13; d++) {
    console.log(a);
    let temp = a + b;
    a = b;
    b = temp;
}

// 3. Escreva um programa que use um laço for para imprimir na tela os números de 10 a 1 (em ordem decrescente).

let c = 10;

for(c = 10; c >= 1; c-- ){
    console.log(c);
}

// 4. Faça um programa que calcule o fatorial de um número inteiro. Ex.: 5! = 5 x 4 x 3 x 2 x 1 = 120.

let f = 5;
let produto = 1;

for(let c = 1; c <= f; c++){
    produto = produto * c;
}
console.log(produto);

// 5. Crie um programa que exiba todos os números múltiplos de 7 de 1 a 100 usando um loop for e uma estrutura condicional if para verificar se cada número é múltiplo de 7


for( let c = 1; c <= 100; c++){
    if( c % 7 == 0 ){
        console.log(c)
    }
}


// 6. Mostre a soma do 50 até o número 100 usando loop for.

let soma = 0

for( let c = 50; c <= 100; c++){
    soma = soma + c;
}
console.log(`A soma de 50 até 100: ${soma}`);


// 7. Mostre a seguinte figura com utilização de laços:

let linha = "";
let altura = 5;

for(let c = 0; c < 5; c++){
    linha = linha + "*";
    console.log(linha);
}









