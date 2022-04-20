import Image from "next/image";
import { useRouter } from "next/router";
// import Link from "next/link";

// Interfaces
import { SmallPokemon } from "../../interfaces";

const PokemonCard = ({ id, name, img }: SmallPokemon) => {
  const router = useRouter();

  const handleClic = () => {
    router.push(`/pokemon/${id}`);
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
          {/* <Link href={`/pokemon/${id}`}>
            <a>
              <button>More...</button>
            </a>
          </Link> */}
          <button onClick={handleClic}>More...</button>
        </div>
      </footer>
    </li>
  );
};

export default PokemonCard;
