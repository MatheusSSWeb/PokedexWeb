const PokeName = document.querySelector('.poke-nome');
const PokeNumber = document.querySelector('.poke-num');
const PokeImage = document.querySelector('.poke-imagem');
const form = document.querySelector('.poke-form');
const Input = document.querySelector('.poke-pesquisa');

const fetchPokemon = async (pokemon) => {

    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`)
    
    if (APIResponse.status == 200) {
        const data = await APIResponse.json();
    return data;
    }
}

const renderPokemon = async (pokemon) => {

    PokeName.innerHTML = 'Loading...';
    PokeNumber.innerHTML = '';

    const data = await fetchPokemon (pokemon);
    
if (data) {
    
    PokeName.innerHTML = data.name;
    PokeNumber.innerHTML = data.id;
    PokeImage.src = data['sprites']['versions']['generation-v']
    ['black-white']['animated']['front_default'];
}   else{
    PokeName.innerHTML = 'Not Found';
    PokeNumber.innerHTML = 'Null';
}

}

form.addEventListener(`submit`, (event) => {
    event.preventDefault();

    renderPokemon(Input.value);
    Input.value = '';
})

renderPokemon('1');
