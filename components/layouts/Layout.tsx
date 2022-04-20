import Head from "next/head";
import { FC, PropsWithChildren } from "react";

// Components
import { Navbar } from "../ui";

interface Props {
  title?: string;
}

const Layout: FC<PropsWithChildren<{} & Props>> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title> {title || "Pokemon App"} </title>
        <meta name="author" content="Juan Camilo Ramírez" />
        <meta
          name="description"
          content={`Información sobre el pokemón: ${title}`}
        />
        <meta name="keywords" content={`${title}, pokemon, pokedex, pokeApi`} />
      </Head>

      <Navbar />

      <main>{children}</main>
    </>
  );
};

export { Layout };
