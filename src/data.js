// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

//export const typeFilter = (data, valor) => {
//  const filterTypeArr = data.filter(items => (items.generation[1] === valor || valor === 'All')); //propiedades del item 
//  return filterTypeArr;
//};

/*export const filterRegion = (regionSeleccionada, fullPokemon) => {
  const resultRegion = fullPokemon.filter(pokemon => {
      if (pokemon.generation.name.includes(regionSeleccionada)) {
          return true;
      }
  })
  if (resultRegion.length === 0)  {
    return pokemon;
  }
  else {
    return resultRegion;
  }
}; */

export const pokemonTypes = (pokemon) => {
  const typesPkm = new Set();
  pokemon.forEach(pokemonActual => {
    pokemonActual.type.forEach(types =>{
      typesPkm.add(types);
    })
  })
  return typesPkm; 
};

/*export const filterType = (tipoSeleccionado, fullPokemon) => {
  const resultFilter = fullPokemon.filter(pokemon => {
      if (pokemon.type.includes(tipoSeleccionado)) {
          return true;
      }
  })
  if (resultFilter.length === 0)  {
    return fullPokemon;
  }
  else {
    return resultFilter;
  }
};*/

export const filterPokemon = (data, tipo, region, name) => {
  const tipoPokemon = data.filter(pokemon => tipo === 'all' ? true : pokemon.type == tipo)
.filter(pokemon => region === 'all' ? true : pokemon.generation.name == region)
.sort((a, b) => name === 'all' ? true : name === 'A-Z' ? a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1 : a.name.toUpperCase() > b.name.toUpperCase() ?  -1 : 1)

 return tipoPokemon
}

/*export const orderSort = (pokemon, userOption) => {
  if (userOption == "A-Z") {
    pokemon.sort(function(a, b){
      if (a.name < b.name) { return -1;}
      if (a.name > b.name) { return 1; }
      return 0;
    })

  } else if (userOption == "Z-A") {
    pokemon.sort(function(a, b){
      if (a.name < b.name) { return 1;}
      if (a.name > b.name) { return -1;}
      return 0;
    })
  }  else if (userOption.length===0){
      return pokemon;
    }
  
  return pokemon;
  
  
  }*/


  