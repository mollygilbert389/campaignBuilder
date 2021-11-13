import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { RandomEvents, Encounters } from "./components";
import { Button } from 'react-bootstrap';
import "./style.css";
import { setEncounters, setRandomEncounters } from "../../actions/index";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const EncountersAndEvents = ({ onSetEncounters, campaign, onSetRandomEncounters }) => {
    const [showModal, setShowModal] = useState(false);
    const setReduxEncounters = (destination, value) => {
        onSetEncounters(destination, value)
    }

    const setReduxRandomEncounters = (destination, value) => {
        onSetRandomEncounters(destination, value)
    }
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
                        <Encounters setEncounters={setReduxEncounters}/>
                        <RandomEvents setRandomEncounters={setReduxRandomEncounters} campaign={campaign}/>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-success" onClick={() => setShowModal(!showModal)}>Save</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {campaign: state.campaignReducer}
}

const mapDispatchtoProps = (dispatch) => ({
    onSetEncounters: bindActionCreators(setEncounters, dispatch),
    onSetRandomEncounters: bindActionCreators(setRandomEncounters, dispatch),
});

export default connect(mapStateToProps, mapDispatchtoProps)(EncountersAndEvents);