import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

// Icons
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import ActiveLink from "./ActiveLink";

const Navbar = () => {
  const router = useRouter();

  const [findPokemon, setFindPokemon] = useState("");

  const handleSearch = () => {
    router.push(`/name/${findPokemon}`);
  };

  return (
    <nav className={"navbar__container"}>
      <div className="navbar__logo">
        <Image
          src="https://res.cloudinary.com/ddmeptk5c/image/upload/v1650300885/pokemon/logo/ftipng.com-Descarga-gratuita-de-Pokeball_pxdzl5.png"
          alt="Pokemon App"
          width={40}
          height={40}
        />
        <Link href={"/"}>
          <a>
            <h1>Pokemon</h1>
          </a>
        </Link>
      </div>
      <div className="navbar__search">
        <div className="navbar__search_container">
          <input
            type="text"
            placeholder="Search a Pokemon..."
            onChange={(e) => setFindPokemon(e.target.value)}
          />
          <div
            className="navbar__icon"
            onClick={handleSearch}
            style={{ cursor: "pointer" }}
          >
            <AiIcons.AiOutlineSearch />
          </div>
        </div>
      </div>
      <div className="navbar__options">
        <ul>
          <ActiveLink href={"/favorites"}>
            <>
              <p>Favorites</p>
              <MdIcons.MdFavoriteBorder />
            </>
          </ActiveLink>
        </ul>
      </div>
    </nav>
  );
};

export { Navbar };
