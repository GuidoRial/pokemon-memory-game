import React, { useState } from "react";

const Scoreboard = () => {
    const [currentScore, setCurrentScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);

    const incrementCurrentScore = () => {
        setCurrentScore(currentScore + 1);
    };

    const implementBestScore = () => {
        setBestScore(currentScore);
        setCurrentScore(0);
    };

    return (
        <div className="scoreboard">
            <div className="score current-score">Current score: {currentScore}</div>
            <div className="score best-score">Best score: {bestScore}</div>
        </div>
    );
};

export default Scoreboard;
