import React from "react";
import PokemonCard from "./PokemonCard";

const CardsGrid = ({ pokemons }) => {
    const pokemonCards = pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon}/>
    ));

    return <div className="cards-grid">{pokemonCards}</div>
};

export default CardsGrid;
