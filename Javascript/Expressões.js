//Operadores Aritiméticos
let x = 5;
let y = 5;

// ADIÇÃO (+)
let z = x + y;

// SUBTRAÇÃO (-)
z = x - y;

// MULTIPLICAÇÃO (*)
z = x * y;

// POTÊNCIA - (**)
z = x ** y;

// DIVISÃO (/)
z = x / y;

// MÓDULO - SOBRA DA DIVISÃO (%)
z = x % y;

// INCREMENTO (++)
// x = y + 1;
x = ++y;
y++;

// DECREMENTO (--)
// y = x - 1;
y = --x;
x--;

//---------------//

//Operadores de Atribuição e Atribuição composta

let x = 5;
let y = 3;

// ATRIBUIR O VALOR (=)
let z = y;

// O VALOR SOMADO Á OUTRO
// z = z + x;
z += x;

// O VALOR SUBTRAIDO Á OUTRO
// z = z - x;
z -= x;

// O VALOR MULTIPLICADO Á OUTRO
// z = z * x;
z *= x;

// O VALOR DIVIDIDO Á OUTRO
// z = z * x;
z /= x;

// O VALOR RESTANTE DA DIVISÃO, SOMADO Á OUTRO
// z = z % x;
z %= x;

// O VALO ELEVADO A POTENCIA DE OUTRO
// z = z ** x;
z **= x;

//----------------//

//Operadores de Comparação

const x = 5;

// VALOR IGUAL (==)
x == 8; // false

// VALOR E TIPO IGUAL (===)
x === '5'; // false

// VALOR DIFERENTE (!=)
x != 8; // true

// VALOR E TIPO DIFERENTE (!==)
x !== 5; // false

// MAIOR (>)
x > 4; // false

// MENOR (<)
x < 6; // true

// IGUAL OU MAIOR (>=)
x >= 5; // true

// MENOR OU IGUAL (<=)
x <= 4; // true

//---------------//

//Operador Condicional (Ternario)

// EXPRESSÃO ? SE SIM : SE NÃO
const idade = 18;
const mensagem = idade >= 18 ? 'Tudo certo' : 'Você não tem idade';

//-------------–––––––––//

//Operadores Lógicos

let idade = 19;
let acompanhado = false;

// E (&&)
idade < 18 &&
  acompanhado ==
    true(
      // OU (||)
      idade >= 18 || (idade < 18 && acompanhado == true)
    );

// NEGAÇÃO (!)
!(idade >= 18);

//------------------//

//Operadores Avançados

// REST OPERATOR
// AGRUPA TODOS OS PARÂMETROS EM UM ARRAY
function soma(...numeros) {
  return numeros.reduce((num, total) => num + total, 0);
}

// SPREAD OPERATOR
// SEPARA TODOS OS ÍTENS
const nomes = ['Silvio', 'Juliana'];
let novosNomes = [...nomes, 'Omar', 'Mikael'];

const carro = { rodas: 4, cambio: 'automatico' };
let meuCarro = { ...carro, cor: 'Rosa', marca: 'Range Rover' };

// DESTRUCTING
// DESCONSTROI E ATRIBUI EM UMA NOVA VARIÁVEL
const { rodas, cor } = meuCarro;
const [nome1, nome2] = novosNomes;

// OPTIONAL CHAINING
// ACESSA O ENCADEAMENTO SE EXISTIR O CIRCUITO
const modelo = meuCarro?.modelo?.nome;
