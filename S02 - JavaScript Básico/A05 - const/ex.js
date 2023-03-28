const nome = "Luiz Otávio";
const sobrenome = "Miranda";
const idade = 30;
const peso = 84;
const altura = 1.8;
let imc = peso / (altura * altura)
// o '+' junta, enquanto a ',' separa
console.log(nome + " " + sobrenome, 'tem', idade, 'anos, pesa', peso, "kg");
console.log(`tem ${altura} de altura e seu IMC é de ${imc}`);