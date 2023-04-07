const data = new Date();  // ms
const data1 = new Date(0);  // 01/01/1970 
const tresHoras = 60 * 60 * 3 * 1000;
const data2 = new Date(tresHoras);
console.log(data.toString());

const data3 = new Date(2019, 3, 20, 15, 14, 27, 999);
console.log(data3.toString());
console.log(data3);

/*
0-11 Janeiro-Dezembro
*/

console.log('Dia', data.getDate());
console.log('Mês', data.getMonth());
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia semana', data.getDay());
console.log(data.toString());

function zeroAEsquerda(num){
    return num >= 10? num : `0:${num}`;
}

function formataData(data){
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}:`;
}

const dataBrasil = formataData(data);
console.log(dataBrasil);