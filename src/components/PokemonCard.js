import React from "react";

const PokemonCard = ({pokemon}) => {
    return (
        <div className="pokemon-card">
            <img src={pokemon.image} alt={pokemon.name} />
            <h3>{pokemon.name}</h3>
        </div>
    );
};

export default PokemonCard;
