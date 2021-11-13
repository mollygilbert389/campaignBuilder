import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button, Form, FormControl } from 'react-bootstrap';
import { campaignNameData } from '.';
import "../home.css";

const CampaignNameModal = ({ campaign, setReduxCampaignName }) => {
    const [showModal, setShowModal] = useState(true);
    const [campaignName, setCampaignName] = useState("");
    const [disabled, setDisabled] = useState(true);

    const close = () =>  {
        setShowModal(!showModal);
        setReduxCampaignName(campaignName);
    };
    
    const handleChange = (event) => {
        setCampaignName(event.target.value);
        setDisabled(false);
    };

    const handleGenerateBtn = () => {
        const firstWord = campaignNameData.adjectives[Math.floor(Math.random()* campaignNameData.adjectives.length)];
        const secondWord = campaignNameData.animals[Math.floor(Math.random()* campaignNameData.animals.length)];
        const newCampaignName = `${firstWord} ${secondWord}`;
        setCampaignName(newCampaignName);
        setShowModal(!showModal);
        setReduxCampaignName(newCampaignName);
    };
    
    return (
        <div>
            <div className="btns">
                <Button variant="outline-success" size="lg" onClick={() => setShowModal(!showModal)}>Campaign Name</Button>
            </div>
            <Modal show={showModal} onHide={() => setShowModal(!showModal)}>
                <Modal.Header closeButton>
                    <Modal.Title>Let's start with what you want your campaign to be named.</Modal.Title>
                </Modal.Header>
                <Modal.Body className="d-flex flex-column align-items-center">
                    <p>Enter your campaign name here.</p>
                    <Form inline>
                        <FormControl type="text" placeholder="Campaign Name" className="mr-sm-2" onChange={handleChange}/>
                        <div style={{paddingRight: "10px"}}>or</div> 
                        <Button variant="outline-primary" onClick={handleGenerateBtn}>Generate</Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button 
                        variant={disabled ? "outline-success" : "success" }
                        type="submit" 
                        value="Submit" 
                        onClick={close}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default CampaignNameModal;