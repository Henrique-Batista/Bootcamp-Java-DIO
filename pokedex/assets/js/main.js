const loadMoreButton = document.getElementById("LoadMoreButton");
const pokemonOl = document.getElementById("pokemonList");

const limit = 20
let offset = 0

const maxRecord = 151

function loadPokemonItens (offset, limit) {

    pokeApi.getPokemons(offset, limit).then((pokemonList = []) => {

        const newHTML = pokemonList.map((pokemon) =>  `
        <li class="pokemon ${pokemon.type}">
            <span class="number">${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>
    
            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join("")}
                </ol>
            
                <img src="${pokemon.photo}" 
                    alt="${pokemon.name}">
            </div>
        </li>
        `
        ).join("");
        pokemonOl.innerHTML += newHTML;

    })
        .catch((error) => console.error(error))

}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener("click", () => {

    offset += limit
    const qntRecords = offset + limit

    if (qntRecords >= maxRecord) {
        const newLimit = maxRecord - offset
        loadPokemonItens(offset, newLimit);
        loadMoreButton.parentElement.removeChild(loadMoreButton);
    }
    else {
        loadPokemonItens(offset, limit);
    }
    


})