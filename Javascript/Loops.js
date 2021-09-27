//For
//for (instrucao_1; instrucao_2; instrucao_3) { ... }
//A instrução 1 é executada (uma vez) antes da execução do bloco de código.
//A instrução 2 define a condição para a execução do bloco de código.
//A instrução 3 é executada (todas as vezes) após a execução do bloco de código.

// FORMA SIMPLES
for (let i = 0; i < 5; i++) {
  console.log('O numero é ' + i);
}

// COM ARRAYS
let nomes = ['Silvio', 'Juliana', 'Omar', 'Mikael'];
for (i = 0; i < nomes.length; i++) {
  console.log('Nome:' + nomes[i]);
}

// COM OBJETOS
const carro = {
  rodas: 4,
  cambio: 'automatico',
  cor: 'Rosa',
  marca: 'Range Rover',
};
const chaves = Object.keys(carro);
for (i = 0; i < chaves.length; i++) {
  console.log(`${chaves[i]} tem o valor de ${carro[chaves[i]]}`);
}

//----------------------//

//For In

// for (propriedade in OBJETO_ITERAVEL)
// propriedade vai representar o nome da propriedade ou chave no loop atual
// OBJETO_ITERAVEL pode ser ARRAY ou OBJETO

// COM ARRAYS
let nomes = ['Silvio', 'Juliana', 'Omar', 'Mikael'];
for (chave in nomes) {
  console.log(`${chave} tem o valor de ${nomes[chave]}`);
}

// COM OBJETOS
const carro = {
  rodas: 4,
  cambio: 'automatico',
  cor: 'Rosa',
  marca: 'Range Rover',
};
for (chave in carro) {
  console.log(`${chave} tem o valor de ${carro[chave]}`);
}

//----------------------//

//For Of

// for (valor of OBJETO_ITERAVEL)
// valor vai representar o propio item no loop atual
// OBJETO_ITERAVEL pode ser ARRAY ou OBJETO

// COM ARRAYS
let nomes = ['Silvio', 'Juliana', 'Omar', 'Mikael'];
for (nome of nomes) {
  console.log(nome);
}

// COM OBJETOS
const pessoas = [
  { id: 1, nome: 'john' },
  { id: 2, nome: 'Ali' },
  { id: 3, nome: 'Mass' },
  { id: 4, nome: 'Mass' },
];

for (pessoa of pessoas) {
  console.log(`${pessoa.id} é ${pessoa.nome}`);
}

//------------------–––––––//

//While

// while (condition/expression) { ... }
// condition/expression tem que retonar verdadeiro para o while executar

let i = 0;
while (i < 10) {
  console.log(`O numero é ${i}`);
  i++;
}
