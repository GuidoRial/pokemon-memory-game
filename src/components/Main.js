import PokemonCard from "../components/PokemonCard";
import React, { useState, useEffect } from "react";
import CardsGrid from "../components/CardsGrids";

const Main = () => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        const loadCards = async () => {
            setPokemons(await getPokemon(20));
        };
        loadCards();
    }, []);

    async function getPokemon(number) {
        try {
            const pokemons = [];

            for (let i = 1; i <= number; i++) {
                const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${i}`;
                const response = await fetch(pokemonUrl);
                const pokemon = await response.json();
                const id = pokemon.id;
                const name = pokemon.name;
                const image = pokemon.sprites.front_default;
                pokemons.push({ id, name, image });
            }
            return pokemons;
        } catch (error) {
            console.error(error);
        }
    }

    //When someone clicks a card adds 1 to score and if score>maxScore maxScore = score and rereder a shuffled version of the array
    //when a card is pressed more than 1 set score to 0
    //When maxScore = 12 add a modal that says "you won!"
    return (
        <div className="grid-container">
            <CardsGrid pokemons={pokemons}></CardsGrid>
        </div>
    );
};

export default Main;
