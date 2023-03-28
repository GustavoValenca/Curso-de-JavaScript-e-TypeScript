let umastring = "um texto";
console.log(umastring.lastIndexOf("tex", 7));
console.log(umastring.match(/[a-z]/g));
console.log(umastring.match(/[a-z]/));
console.log(umastring.search(/[a-z]/g));
console.log(umastring.search(/x/));

let outrastring = "o rato roeu a roupa do rei de roma."
console.log(outrastring.replace(/r/, "#"));
console.log(outrastring.replace(/r/g, "#"));
console.log(outrastring.slice(-5, -1));
console.log(outrastring.split(' '))