const form = document.querySelector('.form');
const resultado = document.querySelector('.resultado');

function calcularIMC(evento){
    evento.preventDefault();

    const peso = Number(form.querySelector('.peso').value);
    const altura = Number(form.querySelector('.altura').value);

    const calculo = peso / (altura * altura);
    let situacao;
    if (calculo < 18.5) situacao = 'Abaixo do peso';
    else if (calculo < 25) situacao = 'Peso normal';
    else if (calculo < 30) situacao = 'Sobrepeso';
    else if (calculo < 35) situacao = 'Obesidade grau 1';
    else if (calculo < 40) situacao = 'Obesidade grau 2';
    else situacao = 'Obesidade grau 3';

    resultado.innerHTML = `<br>`
    resultado.style.color = 'red';
    if (peso === 0){
        resultado.innerHTML += "Peso inválido";
    }
    else if (altura == 0){
        resultado.innerHTML += "Altura inválida";
    }
    else {
        resultado.style.color = "Green";
        resultado.innerHTML += `Seu IMC é ${calculo.toFixed(2)} (${peso})`;
    }
}

form.addEventListener('submit', calcularIMC);
