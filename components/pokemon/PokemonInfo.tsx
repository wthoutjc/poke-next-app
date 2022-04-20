// Interface
import { Pokemon as PokemonInfo } from "../../interfaces";

const PokemonInfo = (pokemon: PokemonInfo) => {
  const { name } = pokemon;

  return (
    <div className={"pokemonFull__container"}>
      <h1>{name} </h1>
    </div>
  );
};

export default PokemonInfo;
