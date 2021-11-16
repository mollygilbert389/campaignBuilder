import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import "./home.css";
import { setLocalEvents } from "../actions/index";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const LocalEvents = ({ onSetLocalEvents }) => {
    const [showModal, setShowModal] = useState(false);
    const [localEventChoice, setLocalEventChoice] = useState([]);
    const [eventCap, setEventCap] = useState(false);

    const setReduxLocalEvents = (names) => {
        onSetLocalEvents(names)
    };

    const handleAddEvent = (e) => {
        const updatedChoiceList = localEventChoice;
        updatedChoiceList.push(e.target.name);
        if (localEventChoice.length === 5) {
            setEventCap(true);
        } else {
            setLocalEventChoice(updatedChoiceList);
            setReduxLocalEvents(updatedChoiceList);
        }
    };

    const removeEvent = (event) => {
        const newChoiceList = localEventChoice.filter((eventName) => eventName !== event.target.name);
        if (newChoiceList.length < 5) {
            setEventCap(false);
            setLocalEventChoice(newChoiceList);
            setReduxLocalEvents(newChoiceList);
        }
    };

    return (
        <div>
            <div className="btns">
                <Button variant="outline-success" size="lg" onClick={() => setShowModal(!showModal)}>Local Events</Button>
            </div>
            <Modal size="lg" show={showModal} onHide={() => setShowModal(!showModal)}>
                <Modal.Header closeButton>
                    <Modal.Title>Anything Interesting Happening?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Are there any events going on locally that could add a tone to your immediate world.</p>
                    <br/>
                    <div className="container staticModal">
                        <div className="side">
                        {localEventOptions.map((drop, idx) => {
                            const localEventTrue = localEventChoice?.find((item) => item === drop.eventName) || false;
                            return <Button name={drop.eventName} key={idx} className="eventbtns" onClick={handleAddEvent} disabled={eventCap || localEventTrue}> {drop.eventName}</Button>
                            })}
                        </div>
                        <div className="side">
                        {localEventChoice.map((drop, idx) => (<Button name={drop} key={idx} className="eventbtns" onClick={removeEvent}> {drop}</Button>))}
                        </div>
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
    onSetLocalEvents: bindActionCreators(setLocalEvents, dispatch)
});

export default connect(mapStateToProps, mapDispatchtoProps)(LocalEvents);