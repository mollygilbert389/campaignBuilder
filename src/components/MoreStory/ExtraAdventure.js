import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { SideQuests, Twists } from "./components";
import { Button } from 'react-bootstrap';
import "./style.css";
import { setTwist, setSideQuests } from "../../actions/index";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const ExtraAdventure = ({ onSetSideQuests, onSetTwist }) => {
    const setReduxTwist = (destination, value) => {
        onSetTwist(destination, value)
    }
    const setReduxSideQuests = (destination, value) => {
        onSetSideQuests(destination, value)
    }
    const [showModal, setShowModal] = useState(false);
    return (
        <div>
            <div className="btns">
                <Button variant="outline-success" size="lg" onClick={() => setShowModal(!showModal)}>Extra Adventure</Button>
            </div>
            <Modal size="lg" show={showModal} onHide={() => setShowModal(!showModal)}>
                <Modal.Header closeButton>
                    <Modal.Title>Here are some things you could add to your story to make it more interesting.</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>These are optional. Click the buttons below to make some choices.</p>
                    <br/>
                    <div className="btnspace">
                        <Twists setReduxTwist={setReduxTwist}/>
                        <SideQuests setReduxSideQuests={setReduxSideQuests} />
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
    onSetTwist: bindActionCreators(setTwist, dispatch),
    onSetSideQuests: bindActionCreators(setSideQuests, dispatch),
});

export default connect(mapStateToProps, mapDispatchtoProps)(ExtraAdventure);