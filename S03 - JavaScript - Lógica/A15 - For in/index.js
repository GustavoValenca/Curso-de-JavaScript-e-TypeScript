const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 30
};

for (let chave in pessoa){
    console.log(chave, pessoa[chave]);
}