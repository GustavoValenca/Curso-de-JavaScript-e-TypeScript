const elementos = [
  {tag: 'p', texto: 'Frase 1'},
  {tag: 'div', texto: 'Frase 2'},
  {tag: 'footer', texto: 'Frase 3'},
  {tag: 'section', texto: 'Frase 4'}
];

const container = document.querySelector('.container');

for (let i = 0; i < elementos.length; i++){
    const atual = elementos[i];
    const tag = atual.tag;
    const texto = atual.texto;
    const element = document.createElement(tag);
    element.innerHTML = texto;
    container.appendChild(element);
}