import React, { useState, useEffect } from "react";
import CardsGrid from "../components/CardsGrids";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { style } from "../aux";
import { Box } from "@mui/system";

const Main = () => {
    const [pokemons, setPokemons] = useState([]);
    const [clickedPokemons, setClickedPokemons] = useState([]);
    const [currentScore, setCurrentScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [modal, setModal] = useState(false);
    const [winStatus, setWinStatus] = useState(false);

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
            setModal(true);
        } else {
            const newScore = currentScore + 1;
            if (newScore === pokemons.length) {
                setWinStatus(true);
                setModal(true);
            }
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
        setModal(false);
        setWinStatus(false);
    };

    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "50%",
        height: "30%",
        backgroundColor: "white",
        border: "2px solid #000",
        borderRadius: "5px",
        boxShadow: 24,
        p: 4,
    };

    return (
        <div>
            <Modal
                open={modal}
                onClose={() => setModal(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {winStatus ? (
                        <div className="game-modal">
                            <div className="modal-message">
                                <h2>You won!</h2>
                                <p>You have an excellent memory</p>
                            </div>
                            <div className="modal-try-again">
                                Would you like to try again?
                                <button
                                    className="try-again-button"
                                    onClick={() => resetGame()}
                                >
                                    Try again
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="game-modal">
                            <div className="modal-message">
                                <h2>You lost 😔</h2>
                                <p>
                                    {`You got ${clickedPokemons.length} of ${pokemons.length} right`}
                                </p>
                            </div>
                            <div className="modal-try-again">
                                Would you like to try again?
                                <button
                                    className="try-again-button"
                                    onClick={() => resetGame()}
                                >
                                    Try again
                                </button>
                            </div>
                        </div>
                    )}
                </Box>
            </Modal>
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
