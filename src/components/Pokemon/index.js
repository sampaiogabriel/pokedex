import React from "react";

const heartEmoji = "❤️";

const Pokemon = ({ pokemon }) => {
  const { types } = pokemon;

  const onHeartClick = () => {
    console.log("localStorage add pokemon");
  };

  return (
    <div className="pokemon-card">
      <div className="pokemon-image-container">
        <img
          alt={pokemon.name}
          src={pokemon.sprites.front_default}
          className="pokemon-image"
        />
      </div>
      <div className="card-body">
        <div className="card-top">
          <h3>{pokemon.name}</h3>
          <div>#{pokemon.id}</div>
        </div>
        <div className="card-bottom">
          <div className="pokemon-type">
            {types &&
              types.map((type, index) => (
                <div
                  key={`${index}-type-${type.name}`}
                  className="pokemon-type-text"
                >
                  {type.type.name}
                </div>
              ))}
          </div>
          <button className="pokemon-heart-btn" onClick={onHeartClick}>
            {heartEmoji}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
