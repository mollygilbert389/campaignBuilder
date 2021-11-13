import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import "./style.css";

const Pillar = ({ setReduxPillar }) => {
    const [pillar, setPillar] = useState("");
    const [showModal, setShowModal] = useState(false);

    const handlePillarBtn = (event) =>  {
        setPillar(event.target.name);
        setReduxPillar(event.target.name);
    };

    return (
        <div>
            <div className="btns">
                <Button variant="outline-success" size="lg" onClick={() => setShowModal(!showModal)}>Pillar</Button>
            </div>
            <Modal show={showModal} onHide={() => setShowModal(!showModal)}>
                <Modal.Header closeButton>
                    <Modal.Title>Let's Figure Out Some Goals</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Use the dropdown below to decicde.</p>
                    <br/>
                    <p>
                        Here you will choose your adventure type. 
                        We reccomend a Combat pillar for a short campaign, but you can have any type of campaign you choose!
                    </p>
                    <div>
                        <Button onClick={handlePillarBtn} variant="outline-success" name="Combat" size="lg" block>Combat</Button>
                        <Button onClick={handlePillarBtn} variant="outline-warning" name="Interaction" size="lg" block>Interaction</Button>
                        <Button onClick={handlePillarBtn} variant="outline-danger" name="Exploration" size="lg" block>Exploration</Button>
                    </div>
                </Modal.Body>
                <Modal.Footer/>
            </Modal>
        </div>
    );
}

export default Pillar;
