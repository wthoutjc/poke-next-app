const toggleFavorite = (id: number) => {
  let favorites: Array<number> = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );

  if (favorites.includes(id)) {
    favorites = favorites.filter((pokeId) => pokeId !== id);
  } else {
    favorites.push(id);
  }

  localStorage.setItem("favorites", JSON.stringify(favorites));
};

const existsInFavorites = (id: number): boolean => {
  const favorites: Array<number> = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );

  return favorites.includes(id);
};

const pokemons = (): Array<number> => {
  const pokes = JSON.parse(localStorage.getItem("favorites") || "[]");
  return pokes;
};

export { toggleFavorite, existsInFavorites, pokemons };
