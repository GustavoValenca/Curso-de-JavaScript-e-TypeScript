let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

let tmp = varC
varC = varA;
varA = varB;
varB = tmp;

console.log(varA, varB, varC);