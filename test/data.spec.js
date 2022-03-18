import {filterByKey, sortChampions, statistics1, statistics2} from '../src/data.js';
const dataTest = [
  {
    name: "Aatrox",
    tags: ["Assassin", "Mage"]
  },
  {
    name: "Zyra",
    tags: ["Assassin", "Tank"]
  },
  {
    name: "Galio",
    tags: ["Fighter", "Marksman"]
  },
]

const dataStatistic= [
  {
    info: {
      attack: 2
    },
    stats:{
      attackdamage: 50.41
    }
  },
  {
    info: {
      attack: 7
    },
    stats:{
      attackdamage: 56.508
    }
  },
  {
    info: {
      attack: 6
    },
    stats:{
      attackdamage: 52
    }
  }
]
describe('Deveria filtrar por tags', () => {
  it("Deveria filtrar por Assassin", () => {
    const result = [
      {
        name: "Aatrox",
        tags: ["Assassin", "Mage"]
      },
      {
        name: "Zyra",
        tags: ["Assassin", "Tank"]
      }
    ]
    expect(filterByKey(dataTest, "Assassin")).toEqual(result)
  });
 it("Deveria filtrar por Marksman", () => {
   const result = [
    {
      name: "Galio",
      tags: ["Fighter", "Marksman"]
    }
   ]
    expect(filterByKey(dataTest, "Marksman")).toEqual(result)
  })
});


describe('Deve retornar por nome', () => {
  it('Deberia ordenar de Z-A', () => {
    const result = sortChampions(dataTest)
    expect(result[0].name).toEqual("Zyra");
  });
});

describe('statistics1', () => {
  it('Retorna por meio de ataque', () => {
    const result = statistics1(dataStatistic)
    expect(result).toEqual(5);
  });
});

describe('statistics2', () => {
  it('Retorna pelo meio de dano', () => {
    const result = statistics2(dataStatistic)
    expect(result).toEqual(52.97);
  });
});