import type { NextPage, GetStaticProps } from "next";
import Image from "next/image";
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
  return (
    <>
      <Layout>
        <div className="home__container">
          <div className="home__left_container"></div>
          <div className="home__right_container">
            <h2>Pokemons first generation</h2>
            <input type="text" placeholder="Search" />
            <ul>
              {pokemons?.map((pokemon, i) => (
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
