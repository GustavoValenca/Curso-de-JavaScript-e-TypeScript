console.log('luiz' && NaN && true);
console.log('luiz' && true && true);
console.log('luiz' && true && 'Maria');

/*
FALSY
false
0
'' "" ``
null / undefined
NaN
*/

console.log('luiz' && '' && 'Maria');
console.log('luiz' && NaN && true);

function falaOi(){
    return 'Oi';
}

const vaiExecutar = 'João';
console.log(vaiExecutar && falaOi());
const vaiExecutar2 = undefined;
console.log(vaiExecutar2 && falaOi());

let corUsuario = null;
let corPadrao = corUsuario || 'preto';
console.log(corPadrao);
corUsuario = 'vermelho'
corPadrao = corUsuario || 'preto';
console.log(corPadrao);