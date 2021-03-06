import type { NextPage, GetStaticProps } from "next";
import { ChangeEvent, ChangeEventHandler, useState } from "react";
import { pokeApi } from "../api";

// Layout
import { Layout } from "../components/layouts";

// Interfaces
import { PokemonListResponse, SmallPokemon } from "../interfaces";

// Components
import PokemonCard from "../components/pokemon/PokemonCard";

interface Props {
  pokemons: Array<SmallPokemon>;
}

const Home: NextPage<Props> = ({ pokemons }) => {
  const [pokemonsCard, setPokemonsCards] = useState(pokemons);

  const handleSearch: ChangeEventHandler<HTMLInputElement> = (e) => {
    setPokemonsCards(
      pokemonsCard.filter((pokemon) => pokemon.name.includes(e.target.value))
    );
  };

  return (
    <>
      <Layout title="Poke App">
        <div className="home__container">
          <div className="home__pokemon-data">
            <h2>Pokemons first generation</h2>
            <input
              type="text"
              placeholder="Search by name..."
              onChange={handleSearch}
            />
            <ul>
              {pokemonsCard?.map((pokemon, i) => (
                <PokemonCard key={i + 1} {...pokemon} />
              ))}
            </ul>
          </div>
        </div>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");

  const pokemons: SmallPokemon[] = data.results?.map((pokemon, i) => ({
    ...pokemon,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      i + 1
    }.svg`,
  }));

  return {
    props: {
      pokemons,
    },
  };
};

export default Home;
