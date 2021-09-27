// CRIANDO UM BOOLEAN
const acordado = true;
const correndo = false;

// BOOLEAN ATRAVÉS DE UMA EXPRESSÃO
const idade = 12;
const maiorDeIdade = idade >= 18; // false

// TUDO "COM UM VALOR", É VERDADEIRO
console.log(Boolean(100)); // true
console.log(Boolean(3.14)); // true
console.log(Boolean(-15)); // true
console.log(Boolean('Hello')); // true
console.log(Boolean('false')); // true
console.log(Boolean(7 + 1 + 3.14)); // true

// TUDO "SEM UM VALOR", É FALSO
console.log(Boolean(-0)); // false
console.log(Boolean('')); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false
console.log(Boolean(false)); // false
console.log(Boolean(10 / 'S')); // false
