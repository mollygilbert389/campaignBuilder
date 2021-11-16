import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button, Form, FormControl } from 'react-bootstrap';
import { campaignNameData } from '../WorldBuilder/components';
import "../../home.css";
import { setCampaignName } from "../../actions/index";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const CampaignNameModal = ({ onSetCampaignName }) => {
    const [showModal, setShowModal] = useState(true);
    const [campaignName, setCampaignName] = useState(null);
    const [disabled, setDisabled] = useState(true);

    const setReduxCampaignName = (name) => {
        onSetCampaignName(name)
    };
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
                <Button variant="outline-success" size="lg" onClick={() => setShowModal(campaignName || !showModal)}>Campaign Name</Button>
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
                        disabled={!campaignName}
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

const mapStateToProps = (state) => {
    return {campaign: state.campaignReducer}
}

const mapDispatchtoProps = (dispatch) => ({
    onSetCampaignName: bindActionCreators(setCampaignName, dispatch)
});

export default connect(mapStateToProps, mapDispatchtoProps)(CampaignNameModal);