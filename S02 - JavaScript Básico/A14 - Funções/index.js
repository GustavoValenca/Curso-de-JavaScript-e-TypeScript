function soma(x = 1, y = 2){
    const result = x + y;
    return result;
}

const result = soma(4);
console.log(result);

const raiz = function(n){
    return n ** 0.5;
};

console.log(raiz(9));

const raiz2 = n => n ** 0.5;
console.log(raiz2(4));