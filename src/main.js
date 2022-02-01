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

    let resistance = document.createElement("p");
    resistance.setAttribute("class","resistant");
    resistance.innerHTML = pokemon[i].resistant;
    card.appendChild(resistance);

    let weakness = document.createElement("p");
    weakness.setAttribute("class", "weak");
    weakness.innerHTML = pokemon[i].weaknesses;
    card.appendChild(weakness);

    let eggs = document.createElement("p");
    eggs.setAttribute("class","pkmegg");
    eggs.innerHTML = pokemon[i].egg;
    card.appendChild(eggs);

    



    //*let sAttack = document.createElement("p");
    //*sAttack.setAttribute("class", "specialatk");
    //*sAttack.innerHTML = pokemon[i].special-attack;
    //*card.appendChild(sAttack); 
   //* está anidado y por eso no lo toma?
   //* cómo se hace cuándo hay un - entremedio.

}





