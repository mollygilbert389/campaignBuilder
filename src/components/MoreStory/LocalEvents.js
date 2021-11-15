import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import "./style.css";
import { setLocalEvents } from "../../actions/index";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const LocalEvents = ({ onSetLocalEvents }) => {
    const [showModal, setShowModal] = useState(false);
    const [localEventChoice, setLocalEventChoice] = useState([]);
    const [eventCap, setEventCap] = useState(false);
    const localEventOptions = [
        {id: 1, eventName: "Anniversary of a monarch's reign"},
        {id: 2, eventName: "Anniversary of an important event"},
        {id: 3, eventName: "Arena event"},
        {id: 4, eventName: "Arrival of caravan or ship"},
        {id: 5, eventName: "Arrival of circus"},
        {id: 6, eventName: "Arrival of important NPC"},
        {id: 7, eventName: "Arrival of marching modrons"},
        {id: 8, eventName: "Artistic performance"},
        {id: 9, eventName: "Athletic event"},
        {id: 10, eventName: "Birth of a child"},
        {id: 11, eventName: "Birthday of an important NPC"},
        {id: 12, eventName: "Civic festival"},
        {id: 13, eventName: "Comet apperance"},
        {id: 14, eventName: "Commemoration of a past tragedy"},
        {id: 15, eventName: "Consecration of a new temple"},
        {id: 16, eventName: "Coronation"},
        {id: 17, eventName: "Council meeting"},
        {id: 18, eventName: "Equinox or solstice"},
        {id: 19, eventName: "Execution"},
        {id: 20, eventName: "Fertility festival"},
        {id: 21, eventName: "Full moon"},
        {id: 22, eventName: "Funeral"},
        {id: 23, eventName: "Graduation of cadets or wizards"},
        {id: 24, eventName: "Harvest festival"},
        {id: 25, eventName: "Holy day"},
        {id: 26, eventName: "Investiture of a knight or other noble"},
        {id: 27, eventName: "Lunar eclipse"},
        {id: 28, eventName: "Midsummer festival"},
        {id: 29, eventName: "Midwinter festival"},
        {id: 30, eventName: "Migration of monsters"},
        {id: 31, eventName: "Monarch's ball"},
        {id: 32, eventName: "New moon"},
        {id: 33, eventName: "New year"},
        {id: 34, eventName: "Pardoning of a prisoner"},
        {id: 35, eventName: "Planar conjunction"},
        {id: 36, eventName: "Planetary alignment"},
        {id: 37, eventName: "Priestly investiture"},
        {id: 38, eventName: "Procession of ghosts"},
        {id: 39, eventName: "Rememberance for soliders lost in war"},
        {id: 40, eventName: "Royal address or proclaimation"},
        {id: 41, eventName: "Royal audience day"},
        {id: 42, eventName: "Signing of a treaty"},
        {id: 43, eventName: "Solar eclipse"},
        {id: 44, eventName: "Tournament"},
        {id: 45, eventName: "Trial"},
        {id: 46, eventName: "Violent uprising"},
        {id: 47, eventName: "Wedding or wedding anniversary"},
    ];

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
                        {localEventOptions.map((drop) => {
                            const localEventTrue = localEventChoice?.find((item) => item === drop.eventName) || false;
                            return <Button name={drop.eventName} className="eventbtns" onClick={handleAddEvent} disabled={eventCap || localEventTrue}> {drop.eventName}</Button>
                            })}
                        </div>
                        <div className="side">
                        {localEventChoice.map((drop) => (<Button name={drop} className="eventbtns" onClick={removeEvent}> {drop}</Button>))}
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