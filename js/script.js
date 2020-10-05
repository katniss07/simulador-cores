window.addEventListener('load', start); // aplica um evento para quando a
// janela carregar totalmente o DOM, executamos a função start.
// Garantir que todo DOM está carregado antes de eu manipular.

var inputRed = null,
  inputGreen = null,
  inputBlue = null,
  rangeRed = null,
  rangeGreen = null,
  rangeBlue = null,
  divSquare = null;
// variaveis isoladas.
//Uma variavel para cada elemento HTML que eu quero manipular.
function start() {
  rangeRed = document.querySelector('#rangeRed');
  rangeGreen = document.querySelector('#rangeGreen');
  rangeBlue = document.querySelector('#rangeBlue');

  inputRed = document.querySelector('#inputRed');
  inputGreen = document.querySelector('#inputGreen');
  inputBlue = document.querySelector('#inputBlue');

  divSquare = document.querySelector('#square');

  rangeRed.addEventListener('input', setColor);
  rangeGreen.addEventListener('input', setColor);
  rangeBlue.addEventListener('input', setColor);

  setColor();
}

function setColor() {
  // pega o valor do red pelo range, depois o green e o blue.
  var red = parseInt(rangeRed.value, 10); // parseInt converte o valor para number
  var green = parseInt(rangeGreen.value, 10); // 10 á a base, e é decimal.
  var blue = parseInt(rangeBlue.value, 10);
  // atribui esses valores red,green e blue nos inputs para refletir
  inputRed.value = red;
  inputGreen.value = green;
  inputBlue.value = blue;
  // montar uma string que tenha internamente
  // uma função rgb, que recebe 3 parâmetros.
  var rgbCSS = 'rgb(' + red + ',' + green + ',' + blue + ')';
  //passando a manipulação direta do css
  divSquare.style.backgroundColor = rgbCSS;
}
