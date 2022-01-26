//import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';



console.log(data.pokemon[1].name);

let nombresPokemon;
for (let i = 0; i < 251; ++i) {
    nombresPokemon = data.pokemon[i].name; 
    console.log(nombresPokemon);
    document.getElementById("nombrePk").innerText=nombresPokemon;
    } 
   
//createElement
//.appendChild
//https://www.javascripttutorial.net/javascript-dom/javascript-createelement/





