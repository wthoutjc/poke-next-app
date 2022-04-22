import { GetStaticProps, NextPage, GetStaticPaths } from "next";
import { Layout } from "../../components/layouts";

// Interfaces
import { Pokemon } from "../../interfaces";

// API
import { pokeApi } from "../../api";

// Components
import { PokemonInfo } from "../../components/pokemon";

// Utils
import { getPokemonInfo } from "../../utils/getPokemonInfo";

interface Props {
  pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  return (
    <Layout title={`Poke - ${pokemon.name}`}>
      <PokemonInfo {...pokemon} />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemons = [...Array(151)].map((value, index) => `${index + 1}`);

  return {
    paths: pokemons.map((id) => ({
      params: { id },
    })),
    fallback: "blocking",
  };

  // paths: [
  //   {
  //     params: {
  //       id: pokemons,
  //     },
  //   },
  // ],
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };

  const pokemon = await getPokemonInfo(id);

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

export default PokemonPage;
