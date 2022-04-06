import champions from './champions.js';

//const championsList = champions.map(addName => addName.name.map);

//const sortChampions = document.querySelectorById('#sortChampions');

sortChampions.addEventListener('click', () => {
  showCards();
});

function showCards(champions) {
  document.getElementById("cards").innerHTML = champions
    .map(
      (item) =>
        `
           <img class="image-card" src="${item.img}" alt="Imagem dos  campeões">
            <div class="name text-card">${item.name}</div>
            <ul class="text-card">
              <li>Ataque:${item.attack}</li>
              <li>Defesa:${item.defense}</li>
              <li>Magia:${item.magic}</li>
            </ul>
            `
    )
    .join("");
}
showCards(champions);
