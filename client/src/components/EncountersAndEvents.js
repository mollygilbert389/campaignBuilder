import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { RandomEvents, Encounters } from "./components";
import { Button } from 'react-bootstrap';
import "./home.css";

const EncountersAndEvents = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div>
            <div className="btns">
                <Button variant="outline-success" size="lg" onClick={() => setShowModal(!showModal)}>Encounters & Combat Events</Button>
            </div>
            <Modal size="lg" show={showModal} onHide={() => setShowModal(!showModal)}>
                <Modal.Header closeButton>
                    <Modal.Title>Here are some things you can add to make your story a little more interesting and push your characters forward.</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        These are optional, but suggested. 
                        Encounters are parts of the story where your characters will learn more about the main goal. 
                        Random Events are encounters thrown into the story to spice it up, and add some combat.
                    </p>
                    <br/>
                    <div className="btnspace">
                        <Encounters/>
                        <RandomEvents/>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-success" onClick={() => setShowModal(!showModal)}>Save</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default EncountersAndEvents;
