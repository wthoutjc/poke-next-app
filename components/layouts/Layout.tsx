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
        <meta
          property="og:title"
          content={"Poke App"}
        />
        <meta
          property="og:description"
          content={"This is a read Poke App, built in NextJS by @wthoutjc"}
        />
        <meta
          property="og:image"
          content={"https://res.cloudinary.com/ddmeptk5c/image/upload/f_auto,q_auto/v1650552995/pokemon/banner_itjbek.png"}
        />
      </Head>

      <Navbar />

      <main>{children}</main>
    </>
  );
};

export { Layout };
