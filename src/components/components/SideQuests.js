import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button, Dropdown } from 'react-bootstrap';
import { Slider } from '@material-ui/core';
import "../../../home.css";
import { setSideQuests } from "../../actions/index";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const SideQuests = ({ onSetSideQuests })  => {
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

    const setReduxSideQuests = (destination, value) => {
        onSetSideQuests(destination, value)
    };

    const handleYesNoSideQuest = (e) => {
        switch(e.target.name) {
            case "Yes":
                setYes(true);
            break;
            default: 
                setSideQuests([]);
                setShowModal(false);
            break;
        }
    };

    const handleSideQuestChoice = (ek, e, index) => {
        const selection = e.target.text.trim();
        const newSideQuest = [...sideQuests].map((item) => {
            if (item.id === index) {
                return {...item, type: selection}
            } return item
        });
        setSideQuests(newSideQuest);
        setReduxSideQuests("sideQuests", newSideQuest);
    };

    const handleSlider = (e, value) => {
        let sideQuests = [];
        Array.from(Array(value).keys()).forEach((ev, index) => {
            const newObject = { id: index }
            sideQuests.push(newObject);
        });
        setSideQuests(sideQuests);
    };

    const filteredArr = sideQuestOptions.filter((quest) => sideQuests.every((currQuest) => currQuest.type !== quest.option));

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
                    <p>Use the buttons below to add a side quest to your campaign.</p>
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
                                min={0}
                                max={10}
                                defaultValue={0}
                                onChangeCommitted={handleSlider}
                                valueLabelDisplay="on"/>
                        </div>
                    )}
                    {sideQuests.length > 0 && (sideQuests.map((space, index) => (
                        <div>
                            <Dropdown onSelect={(ek, e) => handleSideQuestChoice(ek, e, index)} className="sideQuestBtns">
                                <Dropdown.Toggle variant="outline-primary">
                                    {sideQuests[index].type ? sideQuests[index].type: 'Choose your Side Quest Goal'}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {filteredArr.map((drop) => (<Dropdown.Item key={drop.id} name={drop.option}> {drop.option}</Dropdown.Item>))}
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    )))}
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
    onSetSideQuests: bindActionCreators(setSideQuests, dispatch)
});

export default connect(mapStateToProps, mapDispatchtoProps)(SideQuests);