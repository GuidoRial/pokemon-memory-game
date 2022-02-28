import React, { useState } from "react";
import Modal from "react-modal";

const Tutorial = () => {
    const [modalIsOpen, setModalIsOpen] = useState(true);
    return (
        <div className="tutorial-container">
            <Modal isOpen={modalIsOpen} className="tutorial">
                <h2>How to play</h2>
                <p>
                    Pokemon Memory Game is a game to test your memory where the objective is to
                    click on every card once, after that the cards will shuffle and the process continues until you either click a card twice or you win 
                </p>
                <button onClick={() => setModalIsOpen(false)}>
                    Start playing
                </button>
            </Modal>
        </div>
    );
};

export default Tutorial;
