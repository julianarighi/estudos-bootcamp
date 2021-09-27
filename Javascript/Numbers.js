// TOSTRING
// TRANSFORMAR NÚMERO EM STRING
var x = 123;
x.toString(); // retorna 123 da variável x
(123).toString(); // retorna 123 do literal 123
(100 + 23).toString(); // retorna 123 da expressão 100 + 23

//TOFIXED
// CONTROLAR O NÚMERO DE CASAS DECIMAIS
var x = 9.656;
x.toFixed(0); // retorna 10
x.toFixed(2); // retorna 9.66
x.toFixed(4); // retorna 9.6560
x.toFixed(6); // retorna 9.656000

// PARSEINT
// CONVERTE UMA STRING OU FLOAT EM UM INTEIRO
parseInt('10'); // retorna 10
parseInt('10.33'); // retorna 10
parseInt('10 20 30'); // retorna 10
parseInt('10 years'); // retorna 10
parseInt('years 10'); // retorna NaN

// PARSEFLOAT
// CONVERTE UMA STRING OU INTEIRO EM FLOAT (SE HOUVER CASAS DECIMAIS)
parseFloat('10'); // retorna 10
parseFloat('10.33'); // retorna 10.33
parseFloat('10 20 30'); // retorna 10
parseFloat('10 years'); // retorna 10
parseFloat('years 10'); // retorna NaN
