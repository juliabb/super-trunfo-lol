export const filterByKey = (dataLOL, role) => {
  const arrayFilter = dataLOL.filter(champion => champion.tags.includes(role));
  return arrayFilter; 
}

export const sortChampions = (dataLOL) => dataLOL.sort((item1, item2) => { 
   return (item1.name > item2.name) ? -1 : 1
})

export const statistics1 = (dataLOL) => {
  let arrayAttack= []; 
dataLOL.forEach((player) => {
  const championAttack= player.info.attack;
 arrayAttack.push(championAttack);
});
  let sumAttack= arrayAttack.reduce((a, b) => a + b , 0);
  let averageAttack= sumAttack/dataLOL.length;
  return averageAttack;

}

export const statistics2= (dataLOL) => {
  let arrayDamage= []; 
dataLOL.forEach((player) => {
  const championDamage= player.stats.attackdamage;
  arrayDamage.push(championDamage);
});

  let sumDamage= arrayDamage.reduce((item1, item2) => item1 + item2 , 0);
  let averageDamage= sumDamage/dataLOL.length;
  let averageRounded= Math.round((averageDamage)* 100) / 100;
  return averageRounded;
//console.log(averageRounded);
}








