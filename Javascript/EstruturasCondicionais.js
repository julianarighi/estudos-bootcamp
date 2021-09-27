//If/Else

let idade = 19;
let acompanhado = false;

if (idade >= 18) {
  // É MAIOR DE IDADE
} else if (acompanhado) {
  // É MENOR, MAS ESTÁ ACOMPANHADO
} else {
  // NÃO É MAIOR E NEM ESTÁ ACOMPANHADO
}

//------------------––//

//Switch/Case

let dia = '';

switch (new Date().getDay()) {
  case 0:
    dia = 'Domingo';
    break;
  case 1:
    dia = 'Segunda';
    break;
  case 2:
    dia = 'Terça';
    break;
  case 3:
    dia = 'Quarta';
    break;
  case 4:
    dia = 'Quinta';
    break;
  case 5:
    dia = 'Sexta';
    break;
  case 6:
    dia = 'Sábado';
    break;
  default:
    dia = 'Não faço ideia!';
}
