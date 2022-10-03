const pokemonDiv = document.getElementById("pokemon-div")

//ikke brug innerHTML ift XSS


fetch("/api/pokemon")
        .then(response => response.json())
        .then(result => {
                console.log(result)
                result.pokemon.results.forEach(pokemon => {
                        const pokemonIndividualDiv = document.createElement("div");
                        const pokemonNameP = document.createElement("p");
                        pokemonNameP.innerText = pokemon.name;

                        const battleLink = document.createElement("a")
                        battleLink.setAttribute("href", `/battle/${pokemon.name}`)
                        const battleButton = document.createElement("button")
                        battleButton.textContent = `battle ${pokemon.name} `
                        battleLink.appendChild(battleButton)

                        pokemonIndividualDiv.appendChild(pokemonNameP);
                        pokemonDiv.appendChild(pokemonIndividualDiv);
                        pokemonDiv.appendChild(battleLink)
                })
        });


/*
setTimeout(() => {
        window.location.href = "/battle";
}, 3000);
*/