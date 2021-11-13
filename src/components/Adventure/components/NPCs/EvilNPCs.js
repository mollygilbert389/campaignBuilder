import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import { Slider  } from '@material-ui/core';
import { EvilNPCCard } from ".";
import "../../style.css";

const EvilNPCs = () => {
    const [evilNPCNum, setEvilNPCNum] = useState(null);
    const [evilNPCData, setEvilNPCData] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const handleSlider = (event, value) => {
        let evilNPCData = []
        for(let i=0; i < value; i++ ) {
            let newObj = {id:i}
            evilNPCData.push(newObj)
        }
        setEvilNPCNum(value);
        setEvilNPCData(evilNPCData)
    }
 
    return (
        <div>
            <div className="btns">
                <Button variant="outline-success" size="lg" onClick={() => setShowModal(!showModal)} disabled>Evil NPCs</Button>
            </div>
            <Modal 
                size="lg" show={showModal} 
                onHide={() => setShowModal(!showModal)}
                enforceFocus={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Let's get some Evil NPCs added to your campaign.</Modal.Title>
                </Modal.Header>
                <Modal.Body className="d-flex flex-column align-items-center">
                    <p>
                        Below are some buttons to help you pick some NPCs.
                        This modal is for your lieutenants for your villain that play a bigger part in your campaign.
                    </p>
                    <br/>
                    <Slider
                        min={1}
                        max={5}
                        defaultValue={3}
                        className="sliderclass"
                        onChangeCommitted={handleSlider}
                        valueLabelDisplay="on"/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-success" onClick={() => setShowModal(!showModal)}>Save</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default EvilNPCs;