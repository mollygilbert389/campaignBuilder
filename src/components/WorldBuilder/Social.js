import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Renown, FactionOrgs } from './components';
import { Button } from 'react-bootstrap';
import "../style.css";

const Social = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div>
            <div className="btns">
                <Button variant="outline-success" size="lg" onClick={() => setShowModal(!showModal)}>The Social
                </Button>
            </div>
            <Modal size="lg" show={showModal} onHide={() => setShowModal(!showModal)}>
                <Modal.Header closeButton>
                    <Modal.Title>Let's create some organizations that might exist in this world.</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        Use the buttons below to make some create those organizations and decide if your characters will have familiartiry with them.
                    </p>
                    <br/>
                    <div className="btnspace">
                        <FactionOrgs
                            setFactionOrgs={this.props.setFactionOrgs}
                            setFactionShow={this.props.setFactionShow}/>
                        <Renown
                            setPlayers={this.props.setPlayers}
                            campaign={this.props.campaign}/>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-success" onClick={() => setShowModal(!showModal)} >Save</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Social;