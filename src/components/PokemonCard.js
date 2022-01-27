import React from "react";

const PokemonCard = ({pokemon, handleCardClick}) => {
    return (
        <div className="pokemon-card" onClick={handleCardClick}>
            <img src={pokemon.image} alt={pokemon.name} />
            <h3>{pokemon.name}</h3>
        </div>
    );
};

export default PokemonCard;
