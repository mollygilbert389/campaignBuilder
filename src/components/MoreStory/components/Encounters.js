import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button, Dropdown, Form } from 'react-bootstrap';
import { Slider } from '@material-ui/core';
import "../style.css";

const Encounters = ({ setReduxEncounters }) => {
    const [showModal, setShowModal] = useState(false);
    const [encounterNum, setEncounterNum] = useState(0);
    const [encounterEvents, setEncounterEvents] = useState([]);
    const encounterOptions = [
        "Protect an NPC or Object",
        "Retrieve an object",
        "Run a guantlet",
        "Sneak In",
        "Stop a ritual",
        "Take out a single target",
        "Investiage an area",
    ];

    const handleSlider = (event, value) => {
        let encounterEvents = [];
        for (let i=0; i < value; i++) {
            let newObject = {id:i}
            encounterEvents.push(newObject)
        };
        setEncounterNum(value);
        setEncounterEvents(encounterEvents);
    };

    const handleSelect = (eventKey, event, index) => {
        const selection = event.target.text;
        const encounterObject = [...this.state.encounterEvents].map(item => {
            if (item.id===index) {
                return {...item, type:selection};
            } return item
        });
        setEncounterEvents(encounterObject);
    };

    const handleDifficultySelect = (eventKey, event, index) => {
        const selection = event.target.text;
        const encounterObject = [...this.state.encounterEvents].map(item => {
            if (item.id===index) {
                return {...item, difficulty: selection};
            } return item
        });
        setEncounterEvents(encounterObject);
    };

    const handleSave = () => {
        setShowModal(!showModal)
        setReduxEncounters("encounters", this.state.encounterEvents)
    }

    return (
        <div>
            <div className="btns">
                <Button variant="outline-success" size="lg" onClick={() => setShowModal(!showModal)}>Encounters</Button>
            </div>
            <Modal show={showModal} onHide={() => setShowModal(!showModal)}>
                <Modal.Header closeButton>
                    <Modal.Title>Your adventure should have some encounters to give the players something to do, and help progress the story along.</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        Below are some buttons to help you decide some encounters. 
                        These will happen organically in your story, and it's up to your players to ultimately decide what to do, 
                        but you can help move them along.
                    </p>
                    <br/>
                    <Slider
                        min={1}
                        max={5}
                        defaultValue={3}
                        onChangeCommitted={handleSlider}
                        valueLabelDisplay="on"/>
                    {encounterEvents.length > 0 && (
                        <div>
                            {encounterEvents.map((space , index)=> {
                                return (
                                    <div>
                                        <Form inline>
                                            <Dropdown onSelect={(keyEvent, event) => handleSelect(keyEvent, event, index)} name={space.id}>
                                                <Dropdown.Toggle variant="outline-primary">
                                                    {encounterEvents[index].type ? encounterEvents[index].type : 'Choose an Encounter Goal'}
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    {encounterOptions.map(item => {return <Dropdown.Item name={item}>{item}</Dropdown.Item>})} 
                                                </Dropdown.Menu>
                                            </Dropdown>
                                            <Dropdown onSelect={(keyEvent, event) => handleDifficultySelect(keyEvent, event, index)}>
                                                <Dropdown.Toggle variant="outline-primary">
                                                    {encounterEvents[index].difficulty ? encounterEvents[index].difficulty : 'Choose the Difficulty'}
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item>Easy</Dropdown.Item>
                                                    <Dropdown.Item>Medium</Dropdown.Item>
                                                    <Dropdown.Item>Hard</Dropdown.Item>
                                                    <Dropdown.Item>Deadly</Dropdown.Item>  
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </Form>
                                    </div>
                                )
                            })}
                        </div>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-success" onClick={handleSave}>Save</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Encounters;