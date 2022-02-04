import { filterRegion } from './data.js';
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


    

   // let specialAttack = document.createElement("p");
   // for (let i = 0; i < 3; i++) {
   //     let attack = pokemon["special-attack"][i].name + " ";
   //     let text = document.createTextNode(`${attack}`);
   //     specialAttack.appendChild(text);
   // }
    //card.appendChild(specialAttack);
    


    //*let sAttack = document.createElement("p");
    //*sAttack.setAttribute("class", "specialatk");
    //*sAttack.innerHTML = pokemon[i].special-attack;
    //*card.appendChild(sAttack); 
   //* está anidado y por eso no lo toma?


}
pokemon.forEach(pokemonActual => {
    createPokemonTypes(pokemonActual);
});


//* for ( let i = 0; i < pokemon.length; i++) { *//

//const sortType = document.querySelector('#generation');// obtener el selector por medalla

// sortType.addEventListener('change', (event) => { //escucho evento donde cambia la opcion escogida
// const dataOrdenada =  typeFilter(pokemon,event.target.value) // Utilizaste el metodo que exportaste y le entregaste como parametro la data de los atletas y el valor del selector
//  createPokemonTypes(dataOrdenada); *//
//  pokemon = dataOrdenada *//
// });

document.getElementById("generation").addEventListener("change", (event) => {
    pokemon = filterRegion(event.target.value, fullPokemon);
    document.getElementById("cardBox").innerHTML = "";
  
    pokemon.forEach(pokemonActual => {
      createPokemonTypes(pokemonActual);
    });
  
  })




