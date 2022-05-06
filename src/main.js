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
  const atributosMaquina = document.getElementById("atributos-maquina");
  atributosMaquina.innerHTML = null;

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
  let radioAtributos = document.getElementsByName("atributo-jogador");

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
    htmlResultado = "<p class='resultado-final'>Venceu</p>";
    finalizarJogo();
  } 
  else if (cartaMaquina.atributes[atributoSelecionado] > cartaJogador.atributes[atributoSelecionado]) {
    placar[1]++;
    htmlResultado = "<p class='resultado-final'>Perdeu</p>";
    finalizarJogo();
  } 
  else if (isNaN(cartaJogador.atributes[atributoSelecionado])) {
    htmlResultado = "<p class='resultado-final'>Por favor, escolha um atributo.</p>"
  } 
  else {
    placar[0];
    placar[1];
    htmlResultado = "<p class='resultado-final'>Empatou</p>";
    finalizarJogo();
  }
  divResultado.innerHTML = htmlResultado;
}

function finalizarJogo() {
  document.getElementById('btnJogar').disabled = true;
  document.getElementById('btnSortear').disabled = false;
  exibirCartaMaquina();
  exibirPlacar();
}

function exibirCartaJogador() {
  const imgCartaJogador = document.getElementById("carta-jogador");
  imgCartaJogador.setAttribute("src", cartaJogador.img);
  imgCartaJogador.classList.remove("imagem-padrao");
  
  const atributosJogador = document.getElementById("atributos-jogador");
  let atributos = "";
  for (let atributo in cartaJogador.atributes) {
    atributos += `
      <label class="radio-grupo">
        <input type="radio" name="atributo-jogador" value="${atributo}">
        ${(cartaJogador.atributes[atributo]).toString().padStart(2, 0)} - ${atributo.toUpperCase()}
      </label>
    `;
  }
  atributosJogador.innerHTML = atributos;
}

function exibirCartaMaquina() {
  const imgCartaMaquina = document.getElementById("carta-maquina");
  imgCartaMaquina.setAttribute("src", cartaMaquina.img);
  imgCartaMaquina.classList.remove("imagem-padrao");
  
  const atributosMaquina = document.getElementById("atributos-maquina");
  let atributos = "";
  for (let atributo in cartaMaquina.atributes) {
    atributos += `
      <label class="radio-grupo">
        <input type="radio" name="atributo-maquina" value="${atributo}" disabled>
        ${(cartaMaquina.atributes[atributo]).toString().padStart(2, 0)} - ${atributo.toUpperCase()}
      </label>
    `;
  }
  atributosMaquina.innerHTML = atributos;
}

function exibirPlacar() {
  const placarJogador = document.getElementById("placarJogador");
  const placarComputador = document.getElementById("placarComputador");

  placarJogador.innerHTML = `👑 Jogador: ${placar[0]}`;
  placarComputador.innerHTML = `👾 Computador: ${placar[1]}`;
}

function zerarCarta(id) {
  const card = document.getElementById(id);
  card.setAttribute("src", "./images/icon.jpeg");

  if(id === "carta-maquina") {
    card.classList.add("imagem-padrao");
  }
}
