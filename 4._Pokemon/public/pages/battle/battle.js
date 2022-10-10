const pathVariables = location.pathname.split("/");
const pokemonName = pathVariables[pathVariables.length-1];

console.log("helloworld")

fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
.then(res => res.json())
.then(pokemon => {
  
    const battlingPokemonImage = document.getElementById("battling-pokemon-sprite")
    battlingPokemonImage.src = pokemon.sprites.other.dream_world.front_default


    console.log(pokemon)
      const iWon = Math.random() >= 0.5;
      const whoWonHeader = document.getElementById("who-won");
      const pokemonNameHeader = document.getElementById("pokemon-name")
      pokemonNameHeader.innerText = pokemon.name
      if(iWon) {
        whoWonHeader.innerText = "You Won!"
      }else{
        whoWonHeader.innerText = "You Lost!"
      }
      
      setTimeout(() => {

      },3000)
      

})