import React from "react";
import { useState, useContext, useEffect, useCallback } from "react";

const url = "https://rickandmortyapi.com/api/character/?name=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [characters, setCharacters] = useState([]);

  const fetchCharacters = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      const { results } = data;
      if (results) {
        const newCharacters = results.map((item) => {
          const { id, name, image, species } = item;
          return {
            id: id,
            name: name,
            image: image,
            species: species,
          };
        });
        const sortCharacters = newCharacters.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        setCharacters(sortCharacters);
      } else {
        setCharacters([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchTerm]);
  useEffect(() => {
    fetchCharacters();
  }, [searchTerm, fetchCharacters]);
  return (
    <AppContext.Provider
      value={{
        loading,
        characters,
        setSearchTerm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
