/*
Primitivos (imutáveis) - string, number, boolen, undefined, null (bigint, symbol)

Referência (mutável) - array, object, function
*/

let a = [1, 2, 3];
let b = [...a];
let c = a;

a.push(4);
console.log(a, b, c);

const a1 = {
    nome: 'Luiz', 
    sobrenome: 'Otávio'
};
const b1 = a1;
const c1 = {...a1};

a1.nome = 'João';
console.log(b1);
console.log(c1);
