import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { NPCs, Patron} from "./components";
import { Button } from 'react-bootstrap';
import "./style.css";
import { setNPCData, setPatronData } from "../../actions/index";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const PatronNPCs = ({ campaign, onSetPatronData, onSetNPCData }) => {
    const [showModal, setShowModal] = useState(false);
    const setReduxPatronData = (destination, value) => {
        onSetPatronData(destination, value)
    }

    const setReduxNPCData = (destination, value) => {
        onSetNPCData(destination, value)
    }

    return (
        <div>
            <div className="btns">
                <Button id="questGiver" variant="outline-success" size="lg" onClick={() => setShowModal(!showModal)}>Patrons And NPCs</Button>
            </div>
            <Modal 
                size="lg" 
                show={showModal} 
                onHide={() => setShowModal(!showModal)}
                enforceFocus={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Who's On Your Team?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        Let's figure out some details about the NPCs you get the play in the game. 
                        Firstly, let's plan your patron who will be the benefactor of the adventure goal. 
                        You can also use this to add some NPC characters to your story to make things interesting.
                    </p>
                    <br/>
                    <div className="btnspace">
                        <Patron
                            campaign={campaign}
                            setPatronData={setReduxPatronData}/>
                        <NPCs
                            setNPCData={setReduxNPCData}
                            campaign={campaign}/>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-success" onClick={() => setShowModal(!showModal)} >Save</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {campaign: state.campaignReducer}
}

const mapDispatchtoProps = (dispatch) => ({
    onSetPatronData: bindActionCreators(setPatronData, dispatch),
    onSetNPCData: bindActionCreators(setNPCData, dispatch)
});

export default connect(mapStateToProps, mapDispatchtoProps)(PatronNPCs);