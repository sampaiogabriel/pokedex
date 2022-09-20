import React from "react";
import Pokemon from "../Pokemon";
import Pagination from "../Pagination";

const Pokedex = ({ pokemons, loading, page, totalPages, changePage }) => {
  const onLeftClickHandler = () => {
    if (page > 0) {
      changePage(page - 1);
    }
  };

  const onRightClickHandler = () => {
    if (page !== totalPages) {
      changePage(page + 1);
    }
  };

  return (
    <div>
      <div className="pokedex-header">
        <h1>Pokedex</h1>
        <Pagination
          page={page + 1}
          totalPages={totalPages}
          onLeftClick={onLeftClickHandler}
          onRightClick={onRightClickHandler}
        />
      </div>
      {loading ? (
        <div>Carregando...</div>
      ) : (
        <div className="pokedex-grid">
          {pokemons.map((pokemon, index) => (
            <Pokemon key={index} pokemon={pokemon} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Pokedex;
