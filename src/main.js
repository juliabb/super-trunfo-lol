
import data from './data/lol/lol.js';
const mostrarInfos = Object.values(data.data);

function printarCards(data) {
    const mostrarCards = document.getElementById("container-dos-cards");
    mostrarCards.innerHTML = data
        .map((item) =>
            `<div class ="print-cards">
            <img class="imagem-campeão" src="${item.splash}">  
            <p> : ${item.title}</p>
            
        </div>`

        ).join("")
}


printarCards(mostrarInfos);
