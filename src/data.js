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

export const filterRegion = (pokemonActual, pokemon) => {
  const resultRegion = pokemon.filter(pokemon => {
      if (pokemon.generation.name.includes(pokemonActual)) {
          return true;
      }
  })
  if (resultRegion.length === 0)  {
    return pokemon;
  }
  else {
    return resultRegion;
  }
};

export const pokemonTypes = (pokemon) => {
  const typesPkm = new Set();
  pokemon.forEach(pokemonActual => {
    pokemonActual.type.forEach(types =>{
      typesPkm.add(types);
    })
  })
  return typesPkm; 
};

export const filterType = (pokemonActual, pokemon) => {
  const resultFilter = pokemon.filter(pokemon => {
      if (pokemon.type.includes(pokemonActual)) {
          return true;
      }
  })
  if (resultFilter.length === 0)  {
    return pokemon;
  }
  else {
    return resultFilter;
  }
};

export const orderSort = (pokemon, userOption) => {
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
  
  
  }
