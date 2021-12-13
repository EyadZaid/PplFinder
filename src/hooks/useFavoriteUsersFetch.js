import { useState, useEffect } from "react";


export const useFavoriteUsersFetch = () => {
  const [favorites, setFavorits] = useState();

  useEffect(() => {
    storageFavorites();
  }, [favorites]);

  async function storageFavorites() {
    if (!favorites) {
      setFavorits(JSON.parse(localStorage.getItem('favorites')||[]))
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }

  return {favorites, setFavorits};
};