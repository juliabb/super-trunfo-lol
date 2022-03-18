import {sortChampions, statistics1, statistics2} from "./data.js";
import {filterByKey} from "./data.js";
import data from './data/lol/lol.js';
let dataLOL = Object.values(data.data);

document.getElementById("btnChampion").addEventListener("click", hidepages)

function hidepages() {
  document.getElementById("pag1").style.display = "none";
  document.getElementById("pag2").style.display = "block";
  document.getElementById("pag3").style.display = "none";
}

document.getElementById("goals").addEventListener("click", showPag3)

function showPag3() {
  document.getElementById("pag1").style.display = "none";
  document.getElementById("pag2").style.display = "none";
  document.getElementById("pag3").style.display = "block";
}


document.getElementById("return").addEventListener("click", () =>{
  document.getElementById("pag1").style.display = "block";
  document.getElementById("pag2").style.display = "none";
  document.getElementById("pag3").style.display = "none";
})

//Mostrar  na pagina os filtros e orden 

let bringForm = document.getElementById("cardPrincipal");

const showInScreen = (showChampion) => {
  bringForm.innerHTML = "";
  showChampion.forEach((champion) => {
    const image = champion.splash;
    let card = document.createElement("div");
    card.setAttribute("class", "cardChampion face");
    // CRIANDO COM LITERAL TEMPLATE
    card.innerHTML = `
    <div class="flip-card">
      <div class="cardContainer">
        <div class="cardFront">
          <h3>${champion.name}</h3>
          <img class = "image" src = ${image}>
          <h4>${champion.title}</h4>
        </div>
        <div class="cardBack">
          <h3>Description</h3>
          <h4>${champion.blurb}</h4>
          <h3>Level of difficulty</h3>
          <h4>${champion.info.difficulty}</h4>
        </div>
      </div>
    </div>
    `
    bringForm.appendChild(card);
  })
};

document.getElementById("btnAll").addEventListener("click", () => {
  showInScreen(dataLOL);
});

document.getElementById("btnKiller").addEventListener("click", () => {
  showInScreen(filterByKey(dataLOL, "Assassin"));
})//Filtro por assassinos

document.getElementById("btnMagic").addEventListener("click", () => {
  showInScreen(filterByKey(dataLOL, "Mage"));
})//Filtro por Magos

document.getElementById("btnFighter").addEventListener("click", () => {
  showInScreen(filterByKey(dataLOL, "Fighter"));
})//Filtro por Lutadores

document.getElementById("btnMarksman").addEventListener("click", () => {
  showInScreen(filterByKey(dataLOL, "Marksman"));
})//Filtro por aTiradores

document.getElementById("btnTank").addEventListener("click", () => {
  showInScreen(filterByKey(dataLOL, "Tank"));
})//Filtro por Tanques

document.getElementById("btnSupport").addEventListener("click", () => {
  showInScreen(filterByKey(dataLOL, "Support"));
})//Filtro por apoios 

const bringOrder = document.getElementById("order")
bringOrder.addEventListener("change", () => {
  let orderChampions = sortChampions(dataLOL)
  if(bringOrder.value === "btnZA"){
    showInScreen(orderChampions);
  } else {
    showInScreen(orderChampions.reverse());
  }
})

//const bringAverage= document.getElementById("average");

// const showAverage= () =>{
//   const div= document.createElement("div");
//   div.setAttribute("class", "curiousFact");
//   div.innerHTML= `
//   <h3> Dato Curioso </h3>
//   <p> Sabias que los campeones de League of Legends tienen un promedio de ataque de ${statistics1(dataLOL)} y ademas su promedio de daño en ataque es del ${statistics2}</p>
//   `

//   bringAverage.appendChild(div);
// }

document.getElementById("showstatistic").innerHTML="Você sabia que os campeões de League of Legends têm uma média de ataque de 5,5 e também seu dano médio de ataque é de 55,9" + statistics1(dataLOL) + " e também seu dano médio de ataque é " + statistics2(dataLOL)


statistics1(dataLOL);
statistics2(dataLOL);
//console.log(arrayAttack);