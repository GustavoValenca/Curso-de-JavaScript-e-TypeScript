// let a = 'A'; // B
// let b = 'B'; // C
// let c = 'C'; // A

// const letras = [b, c, a];
// [a, b, c] = letras;

// console.log(a, b, c);

// ... rest, ... spread
const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900];
const [primeironumero, segundonumero, ...resto] = numeros;
console.log(primeironumero, segundonumero);
console.log(resto);
const [um, , tres, , cinco, , sete] = numeros;
console.log(um, tres, cinco, sete);

const numeros2 = [ [1, 2, 3], [4, 5, 6], [7, 8, 9]];
const [,[,,seis]] = numeros2;
console.log(seis);
const [lista1, lista2, lista3] = numeros2;
console.log(lista3[2]);
