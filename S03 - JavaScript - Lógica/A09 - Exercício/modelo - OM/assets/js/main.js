const data = new Date();
const h1 = document.querySelector('h1')

h1.innerHTML = data.toLocaleDateString('pt-BR', {dateStyle: 'full'}) + ' ' + data.toLocaleTimeString('pt-BR', {timeStyle: 'short'});