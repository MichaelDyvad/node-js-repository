const pathVariables = location.pathname.split("/");
const pokemonName = pathVariables[pathVariables.length-1];

fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
.then(res => res.json())
.then(pokemon => {
  
    const battlingPokemonImage = document.getElementById("battling-pokemon-sprite")
    battlingPokemonImage.src = pokemon.sprites.other.dream_world.front_default


      const iWon = Math.random() >= 0.5;
      const whoWonHeader = document.getElementById("who-won");
      const pokemonNameHeader = document.getElementById("pokemon-name")
      pokemonNameHeader.innerText = pokemon.name
      if(iWon) {
        whoWonHeader.innerText = "You Won!"
      }else{
        whoWonHeader.innerText = "You Lost!"
      }
      
      const body = { 
        pokemonBattled: pokemon.name,
        iWon 
    };

    fetch("/api/battles", {
        method: "POST",
        body: JSON.stringify(body),
        headers: { "Content-type": "application/json" }
    });
      

})