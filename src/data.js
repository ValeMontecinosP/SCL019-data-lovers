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
}