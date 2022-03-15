//Funcão para filtrar por funções
export const filterRole = (champions, roles) => {
  const filterChampions = champions.filter(champion => champion.tags.includes(roles));
  return filterChampions
};

export const orderAlpha = (champions => {
  return champions.sort((a, b) => {
     if (a.name > b.name) return -1;
     else if (a.name < b.name) return -1;
  });
});

//pucha a dificuldade de todos os campeões
export const filterDifficulty = (champions, difficulty) => {
   return champions.filter(campeao =>campeao.title === difficulty)
   
  /*
  let emptyLow = [];
  let emptyMed = [];
  let emptyHig = [];
  champions.forEach(champion => {
     const getDifficulty = champion.info.difficulty;
     if (getDifficulty <= 4) {
        emptyLow.push(champion);
     }
     else if (getDifficulty > 4 && getDifficulty < 8) {
        emptyMed.push(champion);
     }
     else if (getDifficulty >= 8 && getDifficulty <= 10) {
        emptyHig.push(champion);
     }
  });
  if (difficulty == 'Baixa') {
     return emptyLow
  } else if (difficulty == 'Média') {
     return emptyMed
  } else if (difficulty == 'Alta') {
     return emptyHig
  }
  */
};

//pucha stats e mostra os campeões
export const filterStats = (champions, stats) => {
  let topDamage = [];
  let topHealth = [];
  let topMana = [];
  champions.forEach(champion => {
     const baseDamage = champion.stats.attackdamage
     const growthDamage = champion.stats.attackdamageperlevel
     const averageDamage = parseInt(baseDamage / growthDamage)
     if (averageDamage > 25 || averageDamage === 40) {
        topDamage.push(champion)
     }
     const baseHealth = champion.stats.hpregen
     const growthHealth = champion.stats.hpregenperlevel
     const averageHealth = parseInt(baseHealth / growthHealth)
     if (averageHealth === 15) {
        topHealth.push(champion)
     }
     const baseMana = champion.stats.mp
     const growthMana = champion.stats.mpperlevel
     const averageMana = parseInt(baseMana / growthMana)
     if (averageMana === 10) {
        topMana.push(champion)
     }
  });
  if (stats == 'attackdamage') {
     return topDamage
  } else if (stats == 'hpregen') {
     return topHealth
  } else if (stats == 'mana') {
     return topMana
  }
}