import Image from "next/image";

// Interface
import { Pokemon as PokemonInfo } from "../../interfaces";

// Icons
import * as AiIcons from "react-icons/ai";

const PokemonInfo = (pokemon: PokemonInfo) => {
  const { name, sprites } = pokemon;

  console.log(sprites);
  

  const arraySprites = [
    pokemon.sprites.back_default,
    pokemon.sprites.back_shiny,
    pokemon.sprites.front_default,
    pokemon.sprites.front_shiny,
  ];

  return (
    <div className={"pokemonFull__container"}>
      <div className={"pokemonFull__left-side"}>
        <button>
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
              width={90}
              height={100}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonInfo;
