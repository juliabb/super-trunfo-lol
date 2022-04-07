import { carta1, carta2, carta3, carta4 } from "./champions.js"

let cartas = [carta1, carta2, carta3, carta4];
let cartaMaquina;
let cartaJogador;
let htmlResultado = document.getElementById("resultado");
let placar = [0, 0];
exibirPlacar();

document.getElementById("btnSortear").addEventListener("click", sortearCarta)
document.getElementById("btnJogar").addEventListener("click", jogar)


function sortearCarta() {
  zerarCarta("carta-jogador");
  zerarCarta("carta-maquina");
  const divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = null;

  let numeroCartaMaquina = parseInt(Math.random() * 4);
  cartaMaquina = cartas[numeroCartaMaquina];

  let numeroCartaJogador = parseInt(Math.random() * 4);
  while (numeroCartaMaquina == numeroCartaJogador) {
    numeroCartaJogador = parseInt(Math.random() * 3);
  }

  cartaJogador = cartas[numeroCartaJogador];


  document.getElementById("btnSortear").disabled = false;
  document.getElementById("btnJogar").disabled = false;

  // exibirOpcoes();
  exibirCartaJogador();
}

function obtemAtributoSelecionado() {
  let radioAtributos = document.getElementsByName("atributo");

  for (let i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}


function jogar() {
  let atributoSelecionado = obtemAtributoSelecionado();
  let divResultado = document.getElementById("resultado");


  if (cartaJogador.atributes[atributoSelecionado] > cartaMaquina.atributes[atributoSelecionado]) {
    placar[0]++;
    htmlResultado = "<p class='resultado-final'>Venceu</p>"
  } else if (cartaMaquina.atributes[atributoSelecionado] > cartaJogador.atributes[atributoSelecionado]) {
    placar[1]++;
    htmlResultado = "<p class='resultado-final'>Perdeu</p>"
  } else if (isNaN(cartaJogador.atributes[atributoSelecionado])) {
    htmlResultado = "<p class='resultado-final'>Por favor, escolha um atributo.</p>"
  } else {
    placar[0];
    placar[1];
    htmlResultado = "<p class='resultado-final'>Empatou</p>"
  }
  divResultado.innerHTML = htmlResultado;
  document.getElementById('btnJogar').disabled = true;
  document.getElementById('btnSortear').disabled = false;
  exibirCartaMaquina();
  exibirPlacar();
}

function exibirCartaJogador() {
  let divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.img})`;


  let moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  let tagHTML = "<div id='opcoes' class='carta-status'>"

  let opcoesTexto = "";
  for (let atributo in cartaJogador.atributes) {
    opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributes[atributo] + "<br>";

  }

  const nome = `<p class="carta-subtitle">${cartaJogador.name}</p>`

  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
  let divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.img})`;


  let moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" class="template">';
  const tagHTML = "<div id='opcoes' class='carta-status'>"

  let opcoesTexto = "";
  for (let atributo in cartaMaquina.atributes) {
    opcoesTexto += "<p name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributes[atributo] + "</p>";

  }

  const nome = `<p class="carta-subtitle">${cartaMaquina.name}</p>`

  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirPlacar() {
  const placarJogador = document.getElementById("placarJogador");
  const placarComputador = document.getElementById("placarComputador");

  placarJogador.innerHTML = `👑 Jogador: ${placar[0]}`;
  placarComputador.innerHTML = `👾 Computador: ${placar[1]}`;
}

function zerarCarta(id) {
  const idCarta = document.getElementById(id);
  const idCartaTexto =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" class="template" alt="Template do card">';

  idCarta.innerHTML = idCartaTexto;
}
