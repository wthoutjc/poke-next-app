import { GetStaticProps, NextPage, GetStaticPaths } from "next";
import { useRouter } from "next/router";
import { Layout } from "../../components/layouts";

// Interfaces
import { Pokemon } from "../../interfaces";

// API
import { pokeApi } from "../../api";

// Components
import { PokemonInfo } from "../../components/pokemon";

interface Props {
  pokemon: any;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  const { query } = useRouter();

  return (
    <Layout title="Algún pokemon">
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
    fallback: false,
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

  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`);

  return {
    props: {
      pokemon: data,
    },
  };
};

export default PokemonPage;
