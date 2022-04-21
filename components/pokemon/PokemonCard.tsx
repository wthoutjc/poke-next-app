import Image from "next/image";
import { useRouter } from "next/router";

// Interfaces
import { SmallPokemon } from "../../interfaces";

const PokemonCard = ({ id, name, img }: SmallPokemon) => {
  const router = useRouter();

  const handleClic = () => {
    router.push(`/name/${name}`);
  };

  return (
    <li key={id} className={"pokemon__card"}>
      <span className={"pokemon__id"}>#{id}</span>
      <div className={"pokemon__card_img-container"}>
        <Image
          src={img}
          alt={`Pokemon API ${name}`}
          width={120}
          height={160}
          layout="fixed"
        />
      </div>
      <footer className={"pokemon__card_footer"}>
        <div className={"pokemon__card-f-info"}>
          <h5>{name}</h5>
          <button onClick={handleClic}>More...</button>
        </div>
      </footer>
    </li>
  );
};

export default PokemonCard;
