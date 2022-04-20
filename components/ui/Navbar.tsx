import Image from "next/image";
import Link from "next/link";

// Icons
import * as AiIcons from "react-icons/ai";

const Navbar = () => {
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
          <a><h1>Pokemon</h1></a>
        </Link>
      </div>
      <div className="navbar__search">
        <div className="navbar__search_container">
          <input type="text" placeholder="Search a Pokemon..." />
          <div className="navbar__icon">
            <AiIcons.AiOutlineSearch />
          </div>
        </div>
      </div>
      <div className="navbar__options">
        <ul>
          <li>Option 1</li>
          <li>Option 2</li>
          <li>Option 3</li>
          <li>Option 4</li>
          <li>Option 5</li>
        </ul>
      </div>
    </nav>
  );
};

export { Navbar };
