import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button, Dropdown } from 'react-bootstrap';
import { Slider } from '@material-ui/core';
import "../style.css";

const SideQuests = ({ setReduxSideQuests })  => {
    const [showModal, setShowModal] = useState(false);
    const [yes, setYes] = useState(false);
    const [sideQuests, setSideQuests] = useState([]);
    const sideQuestOptions = [
        {id: 1, option: "Find a specific item rumored to be in the area"},
        {id: 2, option: "Retrieve information from an NPC in the area"},
        {id: 3, option: "Rescue a captive"},
        {id: 4, option: "Discover the fate of a missing NPC"},
        {id: 5, option: "Slay a specific monster"},
        {id: 6, option: "Discover the nature and origin of a strange phenpmenon in the area"},
        {id: 7, option: "Secure the aid of a character or creatue in the area"},
        {id: 8, option: "Retrieve a stolen item in the villain's possession"},
    ];

    const handleYesNoSideQuest = (event) => {
        let choice = event.target.name
        switch(choice) {
            case "Yes":
                setYes(true);
            break;
            default: 
                setSideQuests([]);
                setShowModal(false);
            break;
        }
    };

    const handleSideQuestChoice = (keyEvent, event, index) => {
        const selection = event.target.text;
        const newSideQuest = [...this.state.sideQuests].map(item => {
            if (item.id===index) {
                return {...item, type:selection}
            } return item
        });
        setSideQuests(newSideQuest);
        setReduxSideQuests("sideQuests", newSideQuest);
    };

    const handleSlider = (event, value) => {
        let sideQuests = [];
        for (let i=0; i < value; i++) {
            let newObject = {id:i};
            sideQuests.push(newObject);
        }
        setSideQuests(sideQuests);
    };

    return (
        <div>
            <div className="btns">
                <Button variant="outline-success" size="lg" onClick={() => setShowModal(!showModal)}>Side Quests</Button>
            </div>
            <Modal
                size="lg" 
                show={showModal} 
                onHide={() => setShowModal(!showModal)}>
                <Modal.Header closeButton>
                    <Modal.Title>This is optional, do you want to add a side quest to your story?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Use the buttons below</p>
                    <br/>
                    <div className="sideQuestBtnSpace">
                        <div className="sideQuestBtns">
                            <Button name="Yes" variant="outline-success" onClick={handleYesNoSideQuest}>Yes</Button>
                        </div>
                        <div className="sideQuestBtns">
                            <Button name="No" variant="outline-danger" onClick={handleYesNoSideQuest}>No</Button>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    {yes && (
                        <div>
                            <Slider
                                min={1}
                                max={10}
                                defaultValue={5}
                                onChangeCommitted={handleSlider}
                                valueLabelDisplay="on"/>
                        </div>
                    )}
                    {sideQuests.length > 0 && (
                        <div>
                            {sideQuests.map((space , index) => {
                                return (
                                    <div>
                                        <Dropdown onSelect={(keyEvent, event) => handleSideQuestChoice(keyEvent, event, index)}>
                                            <Dropdown.Toggle variant="outline-primary">
                                                {sideQuests[index].type ? sideQuests[index].type: 'Choose your Side Quest Goal'}
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                {sideQuestOptions.map(drop => {
                                                    return <Dropdown.Item key={drop.id} name={drop.option}> {drop.option}</Dropdown.Item>
                                                })}
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                )
                            })}
                        </div>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-success" onClick={() => setShowModal(!showModal)} >Save</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default SideQuests;