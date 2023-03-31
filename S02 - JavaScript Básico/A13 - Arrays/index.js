const alunos = ['Luiz', 'Maria', 'João'];
alunos.unshift('Fábio');
alunos.push('Zé Mary');
delete alunos[1];
// delete alunos[2];
console.log(alunos);

console.log(alunos.pop());
console.log(alunos.shift());

console.log(alunos);
console.log(alunos.slice(1))