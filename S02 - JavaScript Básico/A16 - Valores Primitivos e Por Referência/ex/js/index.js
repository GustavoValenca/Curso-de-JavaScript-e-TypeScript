function escopo(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    // form.onsubmit = function(evento){
    //     evento.preventDefault();
    //     alert(1);
    // };
    
    const pessoas = [];

    function recebeEventoForm(evento){
        evento.preventDefault();
        const nome = form.querySelector('.nome').value;
        const sobrenome = form.querySelector('.sobrenome').value;
        const peso = form.querySelector('.peso').value;
        const altura = form.querySelector('.altura').value;

        function criaPessoa(nome, sobrenome, peso, altura){
            return {
                nome,
                sobrenome,
                peso,
                altura
            }
        }

        const obj = criaPessoa(nome, sobrenome, peso, altura)

        pessoas.push(obj);
        resultado.innerHTML += `<p>Nome: ${nome}<br>` + 
        `Sobrenome: ${sobrenome}<br>` + 
        `Peso: ${peso}<br>` + 
        `Altura: ${altura}</p>`
        console.log(pessoas)
    }

    form.addEventListener('submit', recebeEventoForm);
}
escopo();