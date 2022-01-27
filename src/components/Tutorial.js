import React, { useState } from "react";
import Modal from "react-modal";

const Tutorial = () => {
    const [modalIsOpen, setModalIsOpen] = useState(true);
    return (
        <div className="tutorial-container">
            <Modal isOpen={modalIsOpen} className="tutorial">
                <h2>How to play</h2>
                <p>
                    Pokemon Memory Game is a game where the objective is to
                    click on every card once, if you click the same card twice,
                    you lose
                </p>
                <button onClick={() => setModalIsOpen(false)}>
                    Start playing
                </button>
            </Modal>
        </div>
    );
};

export default Tutorial;
