const pokemonDiv = document.getElementById("pokemon-div")

//ikke brug innerHTML ift XSS

/*
fetch("/pokemon")
        .then(reponse => reponse.json())
        .then(data => {
                dataPokemon.innerHTML =
                data.results.map(datamap => `<li>${datamap.name} </li>`).join("")
        });
*/

/*
fetch("https://pokeapi.co/api/v2/pokemon")
.then(response => response.json())
.then(result => {
    result.results.forEach(pokemon => {
        const pokemonIndividualDiv = document.createElement("div");        
        const pokemonNameP = document.createElement("p");
        pokemonNameP.innerText = pokemon.name;
        pokemonIndividualDiv.appendChild(pokemonNameP);
        pokemonDiv.appendChild(pokemonIndividualDiv);
    });
    
});
*/


/*
setTimeout(() => {
        window.location.href = "/battle";
}, 3000);
*/
