//Criando Arrays

// ARRAY DE STRINGS
var frutas = ['Banana', 'Laranja', 'Maçã'];

// ARRAY MULTI-DADOS
var nome = 'Silvio';
var caixa = [true, 'Banana', 12, -1, `Pessoa ${nome}`];

// ARRAY MULTI-DIMENSIONAL
var multi = ['Banana', 'Maçã', [true, 12, ['Laranja', 'Mamão']]];

//--------------//

//Manipulação

var frutas = ['Banana', 'Laranja', 'Maçã', true, 1.2, -1, [1, 'Batata']];

// LENGHT
// QUANTIDADE DE ÍTEMS EM UM ARRAY
frutas.length;

// TOSTRING
// TRANSFORMA O ARRAY EM STRING
frutas.toString(); // Banana,Laranja,Maçã,true,1.2,-1,1,Batata

// JOIN
// TRANSFORMA O ARRAY EM STRING E PODEMOS COLOCAR UM SEPARADOR
frutas.join(' * ');

// POP
// REMOVE O ÚLTIMO ELEMENTO DO ARRAY, E RETORNA ELE
frutas.pop();

// PUSH
// ADICIONA UM ELEMENTO AO FINAL DO ARRAY E RETORNA O TAMANHO DO ARRAY
frutas.push('Juliana');

// SHIFT
// REMOVE O PRIMEIRO ELEMENTO DO ARRAY E RETORNA ELE
frutas.shift();

// UNSHIFT
// ADICIONA UM ELEMENTO AO INÍCIO DO ARRAY E RETORNA O TAMANHO DO ARRAY
frutas.unshift('Juliana');

// SET BY INDEX
// ATRIBUINDO UM NOVO VALOR PARA O ÍNDICE
frutas[0] = 'Pera';

// GET BY INDEX
// RECUPERANDO O VALOR PELO ÍNDICE
const primeiraFruta = frutas[0];

// DELETE BY INDEX
// DEIXANDO O VALOR UNDEFINED PELO ÍNDICE
delete frutas[0];

// SPLICE
// REMOVENDO ELEMENTOS NO ARRAY
fruits.splice(0, 1); // remove o primeiro elemento

// FLAT
// CRIAR UM NOVO ARRAY COM TODOS OS ELEMENTOS NO MESMO NÍVEL.
// FUNCIONA APENAS EM 1 NÍVEL DE PROFUNDIDADE
fruits.flat();

// FLATMAP
// CRIAR UM NOVO ARRAY COM TODOS OS ELEMENTOS NO MEMSO NÍVEL.
// COMBINA O FLAT COM O MAP
fruits.flatMap((item) => item + ' -> Juliana');

//----------//

//Filtragem de Dados

const pessoas = [
  { id: 1, nome: 'john' },
  { id: 2, nome: 'Ali' },
  { id: 3, nome: 'Mass' },
  { id: 4, nome: 'Mass' },
];

// FILTER
// FILTRA ELEMENTOS DENTRO DE UM ARRAY ATRAVÉS DE EXPRESSÕES
pessoas.filter((p) => p.nome === 'Mass');

// EVERY
// TESTA SE TODOS OS ÍTENS DO ARRAY PASSA NA EXPRESSÃO DE VERIFICAÇÃO
// RETORNA UM BOOLEAN
pessoas.every((p) => p.nome === 'Mass');

// SOME
// TESTA SE QUALQUER UM DOS ÍTENS DO ARRAY PASSA NA EXPRESSÃO DE VERIFICAÇÃO
// RETORNA UM BOOLEAN
pessoas.some((p) => p.nome === 'Mass');

// FINDINDEX
// ENCONTRA UM ELEMENTO DO ARRAY QUE PASSE NA EXPRESSÃO
// RETORN -1 OU O INDICE DO ELEMENTO ENCONTRADO
pessoas.findIndex((p) => p.id === 3);

// INDEXOF
let frutas = ['Banana', 'Melancia', 'Maçã'];
frutas.indexOf('Melancia');

//-------------//

//Loops e Iteração

// MAP
// PERCORRE CADA ELEMENTO NO ARRAY
// RETORNA UM ÍTEM NOVO BASEADO NA EXPRESSÃO DA FUNÇÃO
const numeros = [5, 4, 3, 2, 1];
numeros.map((x) => x * x);

const pessoas = [
  { id: 1, nome: 'john' },
  { id: 2, nome: 'Ali' },
  { id: 3, nome: 'Mass' },
  { id: 4, nome: 'Mass' },
];

pessoas.map((p) => {
  return p.nome + ' - Juliana';
});

// FOREACH
// APLICA UMA FUNÇÃO QUEM RECEBE COMO PARÂMETRO CADA ÍTEM DO ARRAY
pessoas.forEach((p) => console.log(p.nome));

// REDUCE
//
const produtos = [
  { id: 1, nome: 'Maçã', preco: 12.2 },
  { id: 2, nome: 'Laranja', preco: 5 },
  { id: 3, nome: 'Abacaxi', preco: 7.8 },
  { id: 4, nome: 'Melancia', preco: 3.2 },
];

produtos.reduce((total, produto) => (total += produto.preco), 0);
