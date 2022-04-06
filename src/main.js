import champions from './champions.js';

//const championsList = champions.map(addName => addName.name.map);

const sortChampions = document.querySelector('#sortChampions');
const cards = document.querySelector('#cards');
const cardsComputer = document.querySelector('#cards-computer');
const play = document.querySelector('#play');

sortChampions.addEventListener('click', () => {
  cards.classList.remove("hidden");
  showCardsPlayer(champions);
});

play.addEventListener('click', () => {
  cardsComputer.classList.remove("hidden");
  showCardsComputer(champions);
});

function showCardsPlayer(champions) {
  document.getElementById("cards").innerHTML = champions.map(
      (item) =>
        `
        <img src="./img/card-template.jpeg" alt="Moldura do card">
        <div class="name text-card">${item.name}</div>
           <img class="image-card" src="${item.img}" alt="Imagem dos  campeões">
            <ul class="text-card">
              <li>&nbsp;<input type='radio' name='atributo' value=''/> Ataque:${item.atribute.attack}</li>
              <li>&nbsp;<input type='radio' name='atributo' value=''>Defesa:${item.atribute.defense}</li>
              <li>&nbsp;<input type='radio' name='atributo' value=''>Magia:${item.atribute.magic}</li>
            </ul>
            `
    )
    .join("");
}
showCardsPlayer(champions);

function showCardsComputer(champions) {
  document.getElementById("cards-computer").innerHTML = champions.map(
      (item) =>
        `
        <img src="./img/card-template.jpeg" alt="Moldura do card">
        <div class="name text-card">${item.name}</div>
           <img class="image-card" src="${item.img}" alt="Imagem dos  campeões">
            <ul class="text-card">
              <li>&nbsp;<input type='radio' name='atributo' value=''/> Ataque:${item.atribute.attack}</li>
              <li>&nbsp;<input type='radio' name='atributo' value=''>Defesa:${item.atribute.defense}</li>
              <li>&nbsp;<input type='radio' name='atributo' value=''>Magia:${item.atribute.magic}</li>
            </ul>
            `
    )
    .join("");
}
showCardsComputer(champions);


function Sortearcarta() {
  zerarCarta("carta-jogador");
  zerarCarta("carta-computador");
  resultado.innerHTML = "";
  const i = champions.length;
  console.log(i);
  let showCardsComputer = Math.floor(Math.random() * i);
  cartaComputador = cartas[showCardsComputer];
  let cartaSorteadaJogador = Math.floor(Math.random() * i);

  while (cartaSorteadaJogador == cartaSorteadaComputador) {
    let cartaSorteadaJogador = Math.floor(Math.random() * i);
  }
  cartaJogador = cartas[cartaSorteadaJogador];
  document.getElementById("btnJogar").disabled = false;
  document.getElementById("btnSortear").disabled = true;

  exibirCartaJogador();
}

/*
function showCardsPlayer() {
  let championImage =  champions.map(champions => champions.img);
  championImage = `url(${champions.img})`;
  const frame =
    `<img src="./img/card-template.jpeg" alt="Moldura do card">`;
  const tagHTML = `<div id=opcoes class=carta-status>`;
  let text = "";
  //let atribute = champions.map(champions => champions.atribute);
  for (const atribute in champions.atribute) {
    text +=
      "&nbsp;<input type='radio' name='atributo' value='" +
      atribute.attack +
      "'>&nbsp;" +
      "" +
      atribute.defense +
      " " +
      ": " +
      atribute.magic +
      " " +
      ": " +
      frame.atributos[atribute] +
      "<br>";
    const championName = `<p class=carta-subtitle>${champions.name}</p>`;
    cards.innerHTML =
      frame + championName + championImage + tagHTML + text + `</div>`;
  }
} */

