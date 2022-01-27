import React, { useState, useEffect } from "react";
import CardsGrid from "../components/CardsGrids";

const Main = () => {
    const [pokemons, setPokemons] = useState([]);
    const [clickedPokemons, setClickedPokemons] = useState([]);
    const [currentScore, setCurrentScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);

    //Everytime clickedPokemons changes, reload cards
    useEffect(() => {
        const loadCards = async () => {
            setPokemons(await getPokemon(21));
        };
        loadCards();
    }, []);

    //Function to fetch the pokemons
    async function getPokemon(number) {
        try {
            const pokemons = [];

            for (let i = 1; i <= number; i++) {
                const response = await fetch(
                    `https://pokeapi.co/api/v2/pokemon/${i}`
                );
                const pokemon = await response.json();
                const id = pokemon.id;
                const name = pokemon.name;
                const image = pokemon.sprites.front_default;
                pokemons.push({ id, name, image });
            }
            shuffleArray(pokemons);
            return pokemons;
        } catch (error) {
            console.error(error);
        }
    }

    const shuffleArray = (array) => {
        array.sort(() => Math.random() - 0.5);
    };

    const handleCardClick = (e) => {
        const pokemonName = e.target.parentNode.lastChild.textContent;
        playRound(pokemonName);
        shuffleArray(pokemons);
    };

    const playRound = (pokemonName) => {
        if (clickedPokemons.includes(pokemonName)) {
            resetGame();
        } else {
            const newScore = currentScore + 1;
            if (newScore > bestScore) {
                setBestScore(newScore);
                setCurrentScore(newScore);
                setClickedPokemons((prevState) => [...prevState, pokemonName]);
            } else if (newScore <= bestScore) {
                setCurrentScore(newScore);
                setClickedPokemons((prevState) => [...prevState, pokemonName]);
            } 
        }
    };

    const resetGame = () => {
        setClickedPokemons([]);
        setCurrentScore(0);
    };

    return (
        <div>
            <div className="scoreboard">
                <div className="score current-score">
                    Current score: {currentScore}
                </div>
                <div className="score best-score">Best score: {bestScore}</div>
            </div>
            <div className="grid-container">
                <CardsGrid
                    pokemons={pokemons}
                    handleCardClick={handleCardClick}
                ></CardsGrid>
            </div>
        </div>
    );
};

export default Main;
