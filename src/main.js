// import { types } from '@babel/core';
import { pokemonTypes, filterPokemon } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';


//console.log(data.pokemon[1]);

const fullPokemon = data.pokemon;
let pokemon = data.pokemon;


const createPokemonTypes = (dataPokemon) => {

    let cardbox = document.getElementById("cardBox");

    let card = document.createElement("div");
    card.setAttribute("class", "box");
    card.setAttribute("id", "cardId");
    cardbox.appendChild(card);

    let number = document.createElement("p");
    number.setAttribute("class", "num");
    number.innerHTML = dataPokemon.num;
    card.appendChild(number);

    let photo = document.createElement("img");
    photo.src = dataPokemon.img;
    //photo.setAttribute("src", pokemon.img); 
    photo.setAttribute("class", "image");
    card.appendChild(photo);

    let namePkm = document.createElement("p");
    namePkm.setAttribute("class", "name");
    namePkm.innerHTML = dataPokemon.name;
    card.appendChild(namePkm);

    let aboutPkm = document.createElement("p");
    aboutPkm.setAttribute("class", "about");
    aboutPkm.innerHTML = dataPokemon.about;
    card.appendChild(aboutPkm);

    let typePkm = document.createElement("p");
    typePkm.setAttribute("class", "type");
    typePkm.innerHTML = "Type: " + dataPokemon.type.join(", ");
    card.appendChild(typePkm);

    let resistance = document.createElement("p");
    resistance.setAttribute("class","resistant");
    resistance.innerHTML = "Resistance: " + dataPokemon.resistant.join(", ");
    card.appendChild(resistance);

    let weakness = document.createElement("p");
    weakness.setAttribute("class", "weak");
    weakness.innerHTML = "Weaknesses: " + dataPokemon.weaknesses.join(", ");
    card.appendChild(weakness);

    let specialAttack = document.createElement("p");
    specialAttack.setAttribute("class","specialAttk");
    let specAtName = dataPokemon["special-attack"].map(specialAttackArray=>specialAttackArray.name);
    specialAttack.innerHTML = `Special Attacks: ${specAtName.join(", ")}`
    card.appendChild(specialAttack);


}
pokemon.forEach(pokemonActual => {
    createPokemonTypes(pokemonActual);
});

let selectType = document.getElementById("typeFilter");
let selectRegion = document.getElementById("generation");
let selectorSort = document.getElementById("selectorSort")

selectRegion.addEventListener("change", (event) => {
  let regionSeleccionada = event.target.value;
  let tipo = selectType.value;
  let name = selectorSort.value
  pokemon = filterPokemon(fullPokemon, tipo, regionSeleccionada, name);
  console.log(pokemon)
    document.getElementById("cardBox").innerHTML = "";
  
    pokemon.forEach(pokemonActual => {
      createPokemonTypes(pokemonActual);
    });
  
  })

 
  let pkmTypes = pokemonTypes(pokemon);
  pkmTypes.forEach(types => {
    let eachType = document.createElement("option");
    eachType.text = types;
    selectType.appendChild(eachType);
     
  })


  selectType.addEventListener("change", function(event) {
    let tipo = event.target.value;
    let region = selectRegion.value;
    let name = selectorSort.value;
    pokemon = filterPokemon(fullPokemon, tipo, region, name);
    console.log(pokemon)
    //console.log(event.target.value)
    document.getElementById("cardBox").innerHTML = "";
  
    pokemon.forEach(pokemonActual => {
      createPokemonTypes(pokemonActual);
    });
  
  })
  

  
  //let createSelectorSort = document.createElement('select');
  //selectorSort.appendChild(createSelectorSort);

  const sortAscendingName = document.createElement("option");
  sortAscendingName.text = "A-Z";
  selectorSort.appendChild(sortAscendingName);

  const sortDescendingName = document.createElement("option");
  sortDescendingName.text = "Z-A";
  selectorSort.appendChild(sortDescendingName);

  selectorSort.addEventListener("change", (event) => {
    let name = event.target.value;
    let tipo = selectType.value;
    let region = selectRegion.value;
    pokemon = filterPokemon(fullPokemon, tipo, region, name);
    document.getElementById("cardBox").innerHTML = "";
    pokemon.forEach(pokemonActual => {
      createPokemonTypes(pokemonActual);
    });
  })




  






