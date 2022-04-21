import { useEffect, useState } from "react";
import Image from "next/image";

// Utils
import { pokemons } from "../../utils";

// Components
import PokemonFavCard from "./PokemonFavCard";

const PokemonFav = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<Array<number>>([]);

  useEffect(() => {
    setFavoritePokemons(pokemons());
  }, []);

  return (
    <div className={"pokemonFav__container"}>
      {favoritePokemons ? (
        <div className={"pokemonFav__favorites"}>
          {favoritePokemons.map((id) => (
            <PokemonFavCard key={id} id={id} />
          ))}
        </div>
      ) : (
        <div className="pokemonFav__not-content">
          <h1>No favorite pokemons</h1>
          <Image
            src={
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"
            }
            alt={"No pokes"}
            width={250}
            height={250}
            style={{
              opacity: 0.7,
            }}
          />
        </div>
      )}
    </div>
  );
};

export default PokemonFav;
