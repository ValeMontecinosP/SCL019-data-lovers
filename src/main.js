//import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';



console.log(data.pokemon[1].name);


let pokemon = data.pokemon;

let cardbox = document.getElementById("cardBox")

for ( let i = 0; i < pokemon.length; i++) {

    let card = document.createElement("div");
    card.setAttribute("class", "box");
    card.setAttribute("id", "cardId");
    cardbox.appendChild(card);

    let number = document.createElement("p");
    number.setAttribute("class", "num");
    number.innerHTML = pokemon[i].num;
    card.appendChild(number);

    let photo = document.createElement("img");
    photo.setAttribute("src", pokemon[i].img);
    photo.setAttribute("class", "image");
    card.appendChild(photo);

    let name = document.createElement("p");
    name.innerHTML = pokemon[i].name;
    card.appendChild(name);

}





