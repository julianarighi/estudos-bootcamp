// CRIANDO UM OBJETO

const casa = {
  cores: ['Branco', 'Vermelho', 'Preto'],
  valor: 100.0,
  janelas: 5,
  quartos: 2,
  pateo: true,
  endereco: {
    rua: 'Tua teste',
    numero: 123,
    bairro: 'Teste',
    cidade: 'Porto Alegre',
    uf: 'RS',
    cep: '123242-12',
  },
  pintar: function () {
    // casa.cores = ['Azul', 'Amarelo', 'Roxo']
    this.cores = ['Azul', 'Amarelo', 'Roxo'];
    return 'A casa foi pintada!';
  },
  enderecoCompleto: function () {
    return `${this.endereco.rua}, ${this.endereco.numero} - ${this.endereco.bairro}, ${this.endereco.cidade} - ${this.endereco.uf} - ${this.endereco.cep}`.toUpperCase();
  },
};

// ACESSANDO PROPRIEDADES
console.log(casa.cores);
console.log(casa['cores']);

// ACESSANDO PROPIEDADES VIA EXPRESSÕES
const chave = 1 === 1 ? 'cores' : 'pateo';
console.log(casa[chave]);

// ATUALIZANDO PROPIEDADES
casa.janelas = 3;

// EXCLUINDO PROPIEDADES
delete casa.janelas;

// INVOCANDO MÉTODOS
casa.pintar();
casa.enderecoCompleto();

// EXIBIR OBJETO EM FORMATO TEXTO
JSON.stringify(casa);

// TRANSFORMAR TEXTO EM OBJETO
var text = '{"a": "1", "b": "2"}';
JSON.parse(text);

//---------------//

//Getters & Setters

const casa = {
  cores: ['Branco', 'Vermelho', 'Preto'],
  valor: 100.0,
  janelas: 5,
  quartos: 2,
  pateo: true,
  endereco: {
    rua: 'Tua teste',
    numero: 123,
    bairro: 'Teste',
    cidade: 'Porto Alegre',
    uf: 'RS',
    cep: '123242-12',
  },
  set setNumQuartos(quartos) {
    console.log('Alterou número de quartos');
    this.quartos = quartos + 1;
  },
  get getNumQuartos() {
    console.log('Requisitou número de quartos');
    return 'Quartos: ' + this.quartos;
  },
};

// USANDO OBJECT METHODS
Object.defineProperty(casa, 'valorFinal', {
  get: function () {
    return this.valor + 1000;
  },
  set: function (valor) {
    this.valor = valor - 100;
  },
});

//------------------//

//Object Methods

// META DADOS DE PROPERTIES
{
  writable: true; // PROPIEDADE PODE SER ALTERADA
  enumerable: false; // PROPIEDADE PODE SER LISTADA
  configurable: true; // PROPIEDADE PODE SER RECONFIGURADA
}

// DEFINE PROPERTIES
// ADICIONAR OU ALTERA UMA PROPIEDADE DE OBJETO
Object.defineProperties(casa, {
  camas: {
    value: 7,
    enumerable: false,
  },
  suite: {
    value: true,
    configurable: false,
  },
});

// GET OWN PROPERTY DESCRIPTOR
// RETORNA TODOS OS DADOS DE UMA PROPIEDADE / CHAVE
Object.getOwnPropertyDescriptor(casa, 'endereco');

// GET OWN PROPERTY NAMES
// RETORNA TODAS AS PROPIEDADES EM UM ARRAY
Object.getOwnPropertyNames(casa);

// GET KEYS
// RETORNA TODAS AS PROPIEDADES ENUMERÁVEIS EM UM ARRAY
Object.keys(casa);

// GET VALUES
// TRAZ TODOS OS VALORES DE UM OBJETO EM UM ARRAY
Object.values(casa);

// FREEZE
// BLOQUEIA QUALQUER ALTERAÇÃO EM UM OBJETO
Object.freeze(casa);

// IS FROZEN
// VERIFICA SE O OBJETO ESTÁ BLOQUEADO PARA ALTERAÇÕES
Object.isFrozen(casa);
