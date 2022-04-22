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
    // fallback: false, -> $04 para todo lo que no este en el PATH, QUITA EL ISG (Incremental Static Re-Generation)
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string };

  const pokemon = await getPokemonInfo(name);

  if (!pokemon) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      pokemon,
    },
    revalidate: 86399,
  };
};

export default NamePage;
