const pessoa = {
    nome: 'Luiz', 
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

// Atribuição via desestruturação
const { nome: nomedapessa = 'Não tem', sobrenome, endereco: { rua: r, numero }, endereco } = pessoa;
console.log(nomedapessa, sobrenome, r, numero, endereco);
