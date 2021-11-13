import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Renown, FactionOrgs } from './components';
import { Button } from 'react-bootstrap';
import "./style.css";
import { setFactionOrgs, setFactionShow, setPlayers } from "../../actions/index";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const Social = ({ onSetFactionOrgs, onSetFactionShow, onSetPlayers, campaign }) => {
    const setReduxPlayers = (destination, value) => {
        onSetPlayers(destination, value)
    }
    const setReduxFactionOrgs = (names) => {
        onSetFactionOrgs(names)
    }
    const setReduxFactionShow = (destination, value) => {
        onSetFactionShow(destination, value)
    }
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
                        <FactionOrgs setReduxFactionOrgs={setReduxFactionOrgs} setReduxFactionShow={setReduxFactionShow}/>
                        <Renown setReduxPlayers={setReduxPlayers}campaign={campaign}/>
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
    onSetFactionOrgs: bindActionCreators(setFactionOrgs, dispatch),
    onSetFactionShow: bindActionCreators(setFactionShow, dispatch),
    onSetPlayers: bindActionCreators(setPlayers, dispatch)
});

export default connect(mapStateToProps, mapDispatchtoProps)(Social);