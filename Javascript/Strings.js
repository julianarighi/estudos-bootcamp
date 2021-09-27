//CRIAÇÃO//

// ASPAS DUPLAS
var texto = 'Meu Texto';
var texto = "Meu texto 'com aspas duplas' muito legal.";

// ASPAS SIMPLES
var texto = 'Meu texto';

// TEMPLATE STRINGS (CRASE)
var texto = `Meu texto`;
var texto = `Meu texto 'com aspas simples' no meio`;
var texto = `Meu texto "com aspas duplas" no meio`;

var variavel = 'VARIÁVEL';
var texto = `Meu texto com ${variavel} no meio`;

/*-----------------*/

//TAMANHOS//

// LENGHT / TAMANHO
var alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
console.log(alfabeto.length);

//ENCONTRAR POSIÇÃO//

// INDEXOF / LOCALIZA O ÍNDICE
// PODE TER UM SEGUNDO PARAMETRO 'start'
// ACEITA EXPRESSÕES REGULARES
var texto = 'Por favor, localize a posição da palavra localize';

// primeira posição
console.log(texto.indexOf('localize'));

// última posição
console.log(texto.lastIndexOf('localize'));

/*-----------------*/

//EXTRAIR TEXTO//

// SLICE
// EXTRAI UMA PARTE DE STRING E RETORNA EM UMA NOVA VARIÁVEL
var frutas = 'Maça, Banana, Laranja';
var banana = frutas.slice(6, 11);
var negativeBanana = frutas.slice(-14, -8);
var laranja = frutas.slice(14);
var negativeLaranja = frutas.slice(-6);

// SUBSTRING
// NÃO ACEITA VALORES NEGATIVOS
var frutas = 'Maça, Banana, Laranja';
var banana = frutas.substring(6, 11);

//SUBSTR
// O SEGUNDO PARÂMETRO É A QUANTIDADE DE CARACTERES EXTRAIDOS
var frutas = 'Maça, Banana, Laranja';
var banana = frutas.substr(6, 6);
var laranja = frutas.substr(14);
var negativeLaranja = frutas.substr(-6);

/*-----------------*/

//SUBSTITUIR TEXTO//

// REPLACE
// PROCURA UM VALOR, SUBSTITUI E RETORNA UMA NOVA STRING
var texto = 'Eu gosto muito da Microsoft!';
var corrigido = texto.replace('Microsoft', 'Apple');

// ENCONTRA APENAS O PRIMEIRO REGISTRO POR PADRÃO
// PARA ACHARMOS MAIS OCORRENCIAS, PRECISAMOS USAR EXPRESSÕES REGULARES
var texto = 'Ahh a Microsoft... Eu gosto muito da Microsoft.';
var corrigido = texto.replace(/Microsoft/g, 'Apple');

// É CASE SENSITIVE, MAIÚSCULAS E MINÚSCULAS IMPORTAM
// PARA IGNORAR, PRECISAMOS USAR EXPRESSÕES REGULARES
var texto = 'Ahh a Microsoft... Eu gosto muito da microsoft.';
var corrigido = texto.replace(/MICROSOFT/gi, 'Apple');

/*-----------------*/

//COMBINAR TEXTO//

// CONCATENAÇÃO CONVENCIONAL
var nome = 'Juliana';
var sobrenome = 'Sampaio';
var nomeCompleto = 'Nome: ' + nome + ' ' + sobrenome;

// TEMPLATE STRING
var nome = 'Juliana';
var sobrenome = 'Sampaio';
var nomeCompleto = `Nome: ${nome} ${sobrenome}`;

/*-----------------*/

//MÉTODOS DE CARACTERE//

// CHARTAT
var texto = 'Juliana Sampaio';
console.log(texto.charAt(0));

// ACESSO VIA ARRAY []
var texto = 'Juliana Sampaio';
console.log(texto[0]);

/*-----------------*/

//OUTROS MÉTODOS//

// UPPERCASE
// TRANSFORMA TODOS OS CARACTERES EM MAIÚSCULO
var texto = 'Juliana Sampaio';
var maiusculo = texto.toUpperCase();

// LOWECASE
// TRANSFORMA TODOS OS CARACTERES EM MINÚSCULO
var texto = 'Juliana Sampaio';
var minusculo = texto.toLowerCase();

// TRIM
// REMOVE OS ESPAÇOS INICIAIS E FINAIS
var texto = '    Juliana Sampaio           ';
console.log(texto.trim());

// PADDING START
// PREENCHE O INÍCIO DE UMA STRING
var preco = '5';
console.log(preco.padStart(4, 0));

// PADDING END
// PREENCHE O FINAL DE UMA STRING
var preco = '1';
console.log(preco.padEnd(4, 0));
