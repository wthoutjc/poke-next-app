// API
import { pokeApi } from "../api";

// Interfaces
import { Pokemon } from "../interfaces";

const getPokemonInfo = async (nameOrId: string) => {
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${nameOrId}`);

  return {
    id: data.id,
    name: data.name,
    sprites: data.sprites,
  };
};

export { getPokemonInfo };
