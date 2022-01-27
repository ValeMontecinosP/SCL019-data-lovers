//import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';



console.log(data.pokemon[1].name);


let pokemon = data.pokemon;

let cardbox = document.getElementById("cardBox")

for ( let i = 0; i < pokemon.length; i++) {

    let card = document.createElement("div");
    let photo = document.createElement("img");
    let name = document.createElement("p");


    card.setAttribute("class", "box");
    card.setAttribute("id", "cardId");
    photo.setAttribute("src", pokemon[i].img);
    photo.setAttribute("class", "image");
    name.innerHTML = pokemon[i].name;

    cardbox.appendChild(card);
    card.appendChild(photo);
    card.appendChild(name);




}





