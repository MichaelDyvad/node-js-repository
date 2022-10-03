const pathVariables = location.pathname.split("/");
const pokemonName = pathVariables[pathVariables.length-1];

console.log(pokemonName);