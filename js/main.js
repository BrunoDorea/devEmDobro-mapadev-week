const pokemonName = document.querySelector('.nome');
const pokemonHP = document.querySelector('.vida');
const pokemonImage = document.querySelector('.imagem-pokemon');
const pokemonDescription = document.querySelector('.texto');

let searchPokemon = 1;

const fetchPokemon = async(pokemon) => {
  const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  
  if(APIResponse.status === 200) {
    const data = await APIResponse.json();
    return data;
  }
}

const renderPokemon = async(pokemon) => { 
  pokemonName.innerHTML = 'Carregando...';

  const data = await fetchPokemon(pokemon);

  if (data) {
    pokemonName.innerHTML = data.name;
    pokemonHP.innerHTML = data.stats[1].base_stat;
    pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
    pokemonDescription.innerHTML = data.
  }
  else {
    pokemonName.innerHTML = 'Not found';
    pokemonHP.innerHTML = '';
    pokemonImage.src = '';
    pokemonDescription.innerHTML = '';
  }
}

btnPrev.addEventListener('click', () => {
  if(searchPokemon > 1) {
  searchPokemon -= 1;
  renderPokemon(searchPokemon);
  }
});

btnNext.addEventListener('click', () => {
  searchPokemon += 1;
  renderPokemon(searchPokemon);
});

renderPokemon(searchPokemon);