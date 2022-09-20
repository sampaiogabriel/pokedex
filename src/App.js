/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Pokedex from "./components/Pokedex";
import { getPokemons, getTotalPokemonsPerPage } from "./api";

const ITENSPERPAGE = 25;

function App() {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const totalPokemons = await getTotalPokemonsPerPage();
      const arrayPokemonsPromises = await getPokemons(
        ITENSPERPAGE,
        ITENSPERPAGE * page
      );
      const arrayPokemons = await Promise.all(arrayPokemonsPromises);
      setPokemons(arrayPokemons);
      setLoading(false);
      setTotalPage(Math.ceil(totalPokemons / ITENSPERPAGE));
    } catch (error) {
      console.log("fetch Pokemons error:", error);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, [page]);

  const changePage = useCallback((num) => {
    setPage(num);
  }, []);

  return (
    <>
      <Navbar />
      <Searchbar />
      <Pokedex
        pokemons={pokemons}
        loading={loading}
        page={page}
        totalPages={totalPage}
        changePage={changePage}
      />
    </>
  );
}

export default App;
