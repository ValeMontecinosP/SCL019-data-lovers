//import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';



console.log(data.pokemon[1]);


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

    let namePkm = document.createElement("p");
    namePkm.setAttribute("class", "name");
    namePkm.innerHTML = pokemon[i].name;
    card.appendChild(namePkm);

    let aboutPkm = document.createElement("p");
    aboutPkm.setAttribute("class", "about");
    aboutPkm.innerHTML = pokemon[i].about;
    card.appendChild(aboutPkm);

    let typePkm = document.createElement("p");
    typePkm.innerHTML = "Type: " + pokemon[i].type.join(", ");
    card.appendChild(typePkm);

    let resistance = document.createElement("p");
    resistance.setAttribute("class","resistant");
    resistance.innerHTML = "Resistance: " + pokemon[i].resistant.join(", ");
    card.appendChild(resistance);

    let weakness = document.createElement("p");
    weakness.setAttribute("class", "weak");
    weakness.innerHTML = "Weaknesses: " + pokemon[i].weaknesses.join(", ");
    card.appendChild(weakness);

    let eggs = document.createElement("p");
    eggs.setAttribute("class","pkmegg");
    eggs.innerHTML = "Eggs: " + pokemon[i].egg;
    card.appendChild(eggs);

    let specialAttack = document.createElement("p");
    for (let i = 0; i < 3; i++) {
        let attack = pokemon["special-attack"][i].name + " ";
        let text = document.createTextNode(`${attack}`);
        specialAttack.appendChild(text);
    }
    card.appendChild(specialAttack);
    


    //*let sAttack = document.createElement("p");
    //*sAttack.setAttribute("class", "specialatk");
    //*sAttack.innerHTML = pokemon[i].special-attack;
    //*card.appendChild(sAttack); 
   //* está anidado y por eso no lo toma?


}





