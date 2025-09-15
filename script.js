const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const creatureName = document.getElementById("creature-name");
const creatureId = document.getElementById("creature-id");
const creatureWeight = document.getElementById("weight");
const creatureHeight = document.getElementById("height");
const creatureTypes = document.getElementById("types");
const creatureSpecialName = document.getElementById("name");
const creatureSpecialDescription = document.getElementById("description");
const creatureHp = document.getElementById("hp");
const creatureAttack = document.getElementById("attack");
const creatureDefense = document.getElementById("defense");
const creatureSpecialAttack = document.getElementById("special-attack");
const creatureSpecialDefense = document.getElementById("special-defense");
const creatureSpeed = document.getElementById("speed");

const creaturesNameIdLink = "https://rpg-creature-api.freecodecamp.rocks/api/creatures";
const creatureInfoUrl = "https://rpg-creature-api.freecodecamp.rocks/api/creature/";
let creaturesArr = [];

fetch(creaturesNameIdLink)
  .then(res => res.json())
  .then(data => { creaturesArr = data; })
  .catch(() => { alert("There was an error loading creatures!"); });

const searchingForCreatures = (nameOrId) => {
  fetch(creatureInfoUrl + nameOrId)
    .then(res => res.json())
    .then(data => {
      const { id, name, weight, height, special, types, stats } = data;
      const { name: specialName, description } = special;
      const [
        { base_stat: hp },
        { base_stat: attack },
        { base_stat: defense },
        { base_stat: spAttack },
        { base_stat: spDefense },
        { base_stat: speed }
      ] = stats;

      creatureName.innerText = name.toUpperCase();
      creatureId.innerText = `#${id}`;
      creatureWeight.innerText = `Weight: ${weight}`;
      creatureHeight.innerText = `Height: ${height}`;
      creatureTypes.innerHTML = "";
      types.forEach((t, i) => {
        creatureTypes.innerHTML += `<div id="type${i + 1}" class="type-element">${t.name}</div>`;
      });
      creatureSpecialName.innerText = specialName;
      creatureSpecialDescription.innerText = description;
      creatureHp.innerText = hp;
      creatureAttack.innerText = attack;
      creatureDefense.innerText = defense;
      creatureSpecialAttack.innerText = spAttack;
      creatureSpecialDefense.innerText = spDefense;
      creatureSpeed.innerText = speed;
    })
    .catch(() => { alert("There was an error loading the creature you searched for"); });
};

const loadingCreature = () => {
  creatureName.innerText = "";
  creatureId.innerText = "";
  creatureWeight.innerText = "";
  creatureHeight.innerText = "";
  creatureTypes.innerHTML = "";
  creatureSpecialName.innerText = "";
  creatureSpecialDescription.innerText = "";
  creatureHp.innerText = "";
  creatureAttack.innerText = "";
  creatureDefense.innerText = "";
  creatureSpecialAttack.innerText = "";
  creatureSpecialDefense.innerText = "";
  creatureSpeed.innerText = "";

  let creature = searchInput.value.trim();
  if (!isNaN(creature)) {
    if (creaturesArr.some(cr => cr.id == creature)) {
      searchingForCreatures(creature);
    } else { alert("Creature not found"); }
  } else {
    if (creaturesArr.some(cr => cr.name.toLowerCase() === creature.toLowerCase())) {
      searchingForCreatures(creature);
    } else { alert("Creature not found"); }
  }
};

searchBtn.addEventListener("click", () => {
  loadingCreature();
  searchInput.value = "";
});

searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    loadingCreature();
    searchInput.value = "";
  }
});
