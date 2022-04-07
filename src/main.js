
import {carta1, carta2, carta3, carta4} from "./champions.js"

let cartas = [carta1, carta2, carta3, carta4];

let cartaMaquina;
let cartaJogador;



function sortearCarta(){
  const divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = null;

  let numeroCartaMaquina = parseInt(Math.random()*4);
  cartaMaquina = cartas[numeroCartaMaquina];

  let numeroCartaJogador = parseInt(Math.random()*4);
  while(numeroCartaMaquina == numeroCartaJogador){
    numeroCartaJogador = parseInt(Math.random()*3);
  }

  cartaJogador = cartas[numeroCartaJogador];


  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;

  // exibirOpcoes();
  exibirCartaJogador();
}

document.getElementById("btnSortear").addEventListener("click", sortearCarta)
document.getElementById("btnJogar").addEventListener("click", jogar)


function obtemAtributoSelecionado(){
  let radioAtributos = document.getElementsByName("atributo");

  for( let i = 0; i  < radioAtributos.length; i++){
    if (radioAtributos[i].checked==true){
      return radioAtributos[i].value;
    }
  }
}
let htmlResultado = document.getElementById("resultado")
function jogar(){
  let atributoSelecionado = obtemAtributoSelecionado();
  let divResultado = document.getElementById("resultado");

  if(cartaJogador.atributes[atributoSelecionado] > cartaMaquina.atributes[atributoSelecionado]){

    htmlResultado = "<p class='resultado-final'>Venceu</p>"
  }else if(cartaMaquina.atributes[atributoSelecionado] > cartaJogador.atributes[atributoSelecionado]){

    htmlResultado = "<p class='resultado-final'>Perdeu</p>"
  }else{

    htmlResultado = "<p class='resultado-final'>Empatou</p>"
  }
  divResultado.innerHTML = htmlResultado;
  document.getElementById('btnJogar').disabled = true;
  document.getElementById('btnSortear').disabled = false;
  exibirCartaMaquina();
}

function exibirCartaJogador(){
  let divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage=`url(${cartaJogador.img})`;

  let moldura ='<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  let tagHTML = "<div id='opcoes' class='carta-status'>"

  let opcoesTexto = "";
  for(let atributo in cartaJogador.atributes){
    opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributes[atributo] + "<br>";

  }

  const nome = `<p class="carta-subtitle">${cartaJogador.name}</p>`

  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina(){
  let divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage=`url(${cartaMaquina.img})`;


  const moldura ='<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  const tagHTML = "<div id='opcoes' class='carta-status'>"

  let opcoesTexto = "";
  for(let atributo in cartaMaquina.atributes){
    opcoesTexto += "<p name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributes[atributo] + "</p>";

  }

  const nome = `<p class="carta-subtitle">${cartaMaquina.name}</p>`

  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}




