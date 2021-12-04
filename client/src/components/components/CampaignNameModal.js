import React, { useState } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { useQuery } from '@apollo/client';
import { Button, Form, Modal, Row, Col } from 'react-bootstrap';
import { setCampaignName } from "../../actions/index";
import { QUERY_CAMPAIGN_NAME_DATA } from '../../utils';
import "../home.css";

const CampaignNameModal = ({ onSetCampaignName }) => {
    const [showModal, setShowModal] = useState(true);
    const [campaignName, setCampaignName] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const { data } = useQuery(QUERY_CAMPAIGN_NAME_DATA);
    const campaigns = data?.campaignNames || [];

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
        const adjectives = (campaigns || []).filter((word) => word.type === "adjective")
        const animals = (campaigns || []).filter((word) => word.type === "animal")
        const firstWord = adjectives[Math.floor(Math.random()* adjectives.length)];
        const secondWord = animals[Math.floor(Math.random()* animals.length)];
        const newCampaignName = `${firstWord.option} ${secondWord.option}`;
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
                <Modal.Body>
                    <p>Enter your campaign name here.</p>
                    <Form>
                        <Row style={{ display: "flex", alignItems: "center"}}>
                            <Col align-self-center>
                                <Form.Control type="text" placeholder="Campaign Name" onChange={handleChange}/>
                            </Col>
                            <Col xs={1} style={{textAlign: "center"}}>
                                or
                            </Col>
                            <Col align-self-center>
                                <Button variant="outline-primary" onClick={handleGenerateBtn} disabled={campaigns.length === 0}>Generate</Button>
                            </Col>
                        </Row>
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