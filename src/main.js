// import { types } from '@babel/core';
import { filterRegion, pokemonTypes, filterType } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';


console.log(data.pokemon[1]);

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

    let eggs = document.createElement("p");
    eggs.setAttribute("class","pkmegg");
    eggs.innerHTML = "Eggs: " + dataPokemon.egg;
    card.appendChild(eggs);


    let specialAttack = document.createElement("p");
    specialAttack.setAttribute("class","specialAttk");
    let specAtName = dataPokemon["special-attack"].map(specialAttackArray=>specialAttackArray.name);
    specialAttack.innerHTML = `Special Attacks: ${specAtName.join(", ")}`
    card.appendChild(specialAttack);


}
pokemon.forEach(pokemonActual => {
    createPokemonTypes(pokemonActual);
});

document.getElementById("generation").addEventListener("change", (event) => {
    pokemon = filterRegion(event.target.value, fullPokemon);
    document.getElementById("cardBox").innerHTML = "";
  
    pokemon.forEach(pokemonActual => {
      createPokemonTypes(pokemonActual);
    });
  
  })

  let selectType = document.getElementById("typeFilter");
  let pkmTypes = pokemonTypes(pokemon);
  pkmTypes.forEach(types => {
    let eachType = document.createElement("option");
    eachType.text = types;
    selectType.appendChild(eachType);
     
  })


  document.getElementById("typeFilter").addEventListener("change", (event) => {
    pokemon = filterType(event.target.value, fullPokemon);
    document.getElementById("cardBox").innerHTML = "";
  
    pokemon.forEach(pokemonActual => {
      createPokemonTypes(pokemonActual);
    });
  
  })


  






