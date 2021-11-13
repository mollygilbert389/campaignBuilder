import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Villain , EvilNPCs } from "..";
import {Button, OverlayTrigger, Tooltip} from 'react-bootstrap';
import "../style.css";

const VillainSubVillain = ({ setVillainData }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div>
            <div className="btns">
                <Button variant="outline-success" size="lg" onClick={() => setShowModal(!showModal)}>Villains</Button>
            </div>
            <Modal 
                size="lg" 
                show={showModal} 
                onHide={() => setShowModal(!showModal)}
                enforceFocus={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Let's talk about the main villain and the mini bosses.</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Now let's plan our your villain, their drives and goals, and who is on their team.</p>
                    <br/>
                    <div className="btnspace">
                        <Villain setVillainData={setVillainData}/>
                        <OverlayTrigger overlay={
                            <Tooltip>Coming Soon!</Tooltip>}>
                            <span className="d-inline-block">
                                <EvilNPCs/>
                            </span>
                        </OverlayTrigger>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-success" onClick={() => setShowModal(!showModal)} >Save</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default VillainSubVillain;