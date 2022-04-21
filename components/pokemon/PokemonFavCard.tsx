import Image from "next/image";
import { useRouter } from "next/router";

interface Props {
  id: number;
}

const PokemonFavCard = ({ id }: Props) => {
  const router = useRouter();

  const handleGo = () => {
    router.push(`/pokemon/${id}`);
  };

  return (
    <div className={"pokemonFavCard__card"} onClick={handleGo} >
      <div className={"pokemonFavCard__effect"}></div>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
        alt={`Poke App`}
        width={130}
        height={150}
      />
    </div>
  );
};

export default PokemonFavCard;
