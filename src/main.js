import { example } from './data.js';
import data from './data/lol/lol.js';
const mostrarInfos = Object.values(data.data);

function printarCards(type) {
    const mostrarCards = document.getElementById("container-dos-cards");
    mostrarCards.innerHTML = type.map((item) =>
        `<div class ="print-cards">
 <img class="imagem-campeão" src="${item.splash}">  
 <p> versão:${item.version}</p>
 <p> titulo:${item.title}</p>
 <p> nome:${item.name}</p>
 <p> chave:${item.key}</p>
</div>`



    ).join("")


}


printarCards(mostrarInfos);

