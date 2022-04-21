import { useEffect, useState } from "react";
import Image from "next/image";

// Interface
import { Pokemon as PokemonInfo } from "../../interfaces";

// Icons
import * as AiIcons from "react-icons/ai";

// Utils
import { toggleFavorite, existsInFavorites } from "../../utils";

// Effects
import confettti from "canvas-confetti";

const PokemonInfo = (pokemon: PokemonInfo) => {
  const [isInFavorites, setIsInFavorites] = useState(false);

  const { name, sprites } = pokemon;

  const arraySprites = [
    pokemon.sprites.back_default,
    pokemon.sprites.back_shiny,
    pokemon.sprites.front_default,
    pokemon.sprites.front_shiny,
  ];

  useEffect(() => {
    setIsInFavorites(existsInFavorites(pokemon.id));
  }, [pokemon.id]);

  const onToggleFavorite = () => {
    toggleFavorite(pokemon.id);
    setIsInFavorites(!isInFavorites);
    if (!isInFavorites) {
      confettti({
        zIndex: 999,
        particleCount: 100,
        spread: 160,
        angle: -20,
        origin: {
          x: 0,
          y: -0.2,
        },
      });
    }
  };

  return (
    <div className={"pokemonFull__container"}>
      <div className={"pokemonFull__left-side"}>
        <button
          onClick={onToggleFavorite}
          style={isInFavorites ? { color: "yellow" } : { color: "white" }}
        >
          <AiIcons.AiFillStar />
        </button>
        <Image
          src={sprites.other?.dream_world.front_default || "/no-image.png"}
          alt={`${name} information`}
          width={400}
          height={300}
        />
      </div>
      <div className={"pokemonFull__right-side"}>
        <header>
          <h1>{name} </h1>
        </header>
        <h2>Sprites</h2>
        <div className="pokemonFull__image-slider">
          {arraySprites?.map((sprite, i) => (
            <Image
              key={i}
              src={sprite || "/no-image.png"}
              alt={name}
              width={100}
              height={120}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonInfo;
