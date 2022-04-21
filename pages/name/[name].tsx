import { GetStaticProps, NextPage, GetStaticPaths } from "next";

// Components
import { Layout } from "../../components/layouts";
import { PokemonInfo } from "../../components/pokemon";

// Interfaces
import { Pokemon, PokemonListResponse } from "../../interfaces";

// Api
import { pokeApi } from "../../api";

// Utils
import { getPokemonInfo } from "../../utils/getPokemonInfo";

interface Props {
  pokemon: Pokemon;
}

const NamePage: NextPage<Props> = ({ pokemon }) => {
  return (
    <Layout>
      <PokemonInfo {...pokemon} />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");

  const namesPokemons: string[] = data.results.map((pokemon) => pokemon.name);

  return {
    paths: namesPokemons.map((name) => ({
      params: { name },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string };

  return {
    props: {
      pokemon: await getPokemonInfo(name),
    },
  };
};

export default NamePage;
