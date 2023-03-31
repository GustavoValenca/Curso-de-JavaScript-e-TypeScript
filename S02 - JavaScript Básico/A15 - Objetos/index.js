const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala (){
        console.log(`Oi eu sou o ${this.nome}`);
    }
};

console.log(pessoa1);
console.log(pessoa1.nome);

function criaPessoa(nome, sobrenome, idade){
    return {
        nome,
        sobrenome,
        idade
    };
}

// Não funciona:
// let criaPessoa = (nome, sobrenome, idade) => {nome, sobrenome, idade};

const pessoa2 = criaPessoa('Gustavo', 'Valença', 19);
console.log(pessoa2);
pessoa1.fala();