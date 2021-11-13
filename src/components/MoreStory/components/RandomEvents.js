import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button, Dropdown, Form } from 'react-bootstrap';
import { monsters } from "../../Dungeon";
import { Slider } from '@material-ui/core';
import "../style.css";

const RandomEvents = ({ campaign, setReduxRandomEncounters }) => {
    const [randomEncounter, setRandomEncounter] = useState(false);
    const [monsterCat, setMonsterCat] = useState(campaign.travelPointChoices);
    const [monsterDrop, setMonsterDrop] = useState([]);
    const [possibleMonsters, setPossibleMonsters] = useState([]);
    const [randomEncounterMonsters, setRandomEncounterMonsters] = useState([]);
    const [randomEncounterNum, setRandomEncounterNum] = useState(0);
    const [showModal, setShowModal] = useState(false);

    const handleBtnClick = (event) => {
        if (event.target.name === "Yes") {
            setRandomEncounter(true);
        }
    };

    const handleSlider = (event, value) => {
        let randomMonsterObject = [];
        for (let i=0; i < value; i++) {
            let newObject = {id:i};
            randomMonsterObject.push(newObject);
        };
        setRandomEncounterNum(value);
        setRandomEncounterMonsters(randomMonsterObject);
    }

    const handleMonsterShow = () => {
        const choices = monsterCat;
        const newFilteredMonsters = monsters.filter(monster => {
            for(let i=0; i < monster.area.length; i++) {
                for(let j=0; j < choices.length; j++) {
                    if (monster.area.includes(choices[j])) {
                        return true
                    }
                    return false
                }
            }
        });
        const monsterCategories = newFilteredMonsters.map(item => item.category);
        const filterMonsterCategories = [...new Set(monsterCategories)];
        setMonsterDrop(filterMonsterCategories);
        setPossibleMonsters(newFilteredMonsters);
    }

    const handleSelect = (eventKey, event, index) => {
        const selection = event.target.text;
        const updatedMonsterList = possibleMonsters;
        const filteredMonsters = updatedMonsterList.filter(item => (item.category.includes(selection)));
        const newMonsterDrops = [...this.state.randomEncounterMonsters].map(monster => {
            if (monster.id===index) {
                return {...monster, category:selection, filteredMonsterList:filteredMonsters}
            } return monster
        });
        setRandomEncounterMonsters(newMonsterDrops);
    };

    const handleFinalSelect = (eventKey, event, index) => {
        const selection = event.target.text;
        const newMonsterDrops = [...this.state.randomEncounterMonsters].map(monster => {
            if (monster.id===index) {
                return {...monster, finalSelection:  selection};
            } return monster
        });
        setRandomEncounterMonsters(newMonsterDrops)
    }

    const handleSave = () => {
        setShowModal(!showModal);
        setReduxRandomEncounters("randomEncounters", randomEncounterMonsters);
    }

    handleMonsterShow();

    return (
        <div>
            <div className="btns">
                <Button variant="outline-success" size="lg" onClick={() => setShowModal(!showModal)}>Random Encounters</Button>
            </div>
            <Modal show={showModal} onHide={() => setShowModal(!showModal)}>
                <Modal.Header closeButton>
                    <Modal.Title>Do you want to have a random encounter?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        Use the buttons below to add random enounters to your adventure. 
                        If selected use you can use the table privided in your campaign to figure this out later.
                    </p>
                    <br/>
                    <div className="sideQuestBtnSpace">
                        <div className="sideQuestBtns">
                            <Button name="Yes" variant="outline-success" onClick={handleBtnClick}>Yes</Button>
                        </div>
                        <div className="sideQuestBtns">
                            <Button name="No" variant="outline-danger" onClick={handleBtnClick}>No</Button>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    {randomEncounter &&(
                        <div>
                            <Slider
                                min={1}
                                max={10}
                                defaultValue={5}
                                onChangeCommitted={handleSlider}
                                valueLabelDisplay="on"/>
                            {monsterCat.length <= 0 && (
                                <div>
                                    <p>
                                        You haven't selected enough data about your world to plan this. 
                                        If you want to plan some random encounters go back to The Physical and pick some areas of interest.
                                    </p>
                                </div>
                            )}
                        </div>
                    )}
                    {monsterCat.length > 0 && (
                        <div>
                            {randomEncounterMonsters.map((space , index)=> {
                                return (
                                    <div>
                                        <Form inline>
                                            <Dropdown onSelect={(keyEvent, event) => handleSelect(keyEvent, event, index)} name={space.id}>
                                                <Dropdown.Toggle variant="outline-primary">
                                                    {randomEncounterMonsters[index].category ? randomEncounterMonsters[index].category : 'Choose Your Monsters'}
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    {monsterDrop.map(item => {
                                                        return <Dropdown.Item key={item}>{item}</Dropdown.Item> })}       
                                                </Dropdown.Menu>
                                            </Dropdown>
                                            {randomEncounterMonsters[index].category && (
                                                <Dropdown onSelect={(keyEvent, event) => handleFinalSelect(keyEvent, event, index)}>
                                                    <Dropdown.Toggle variant="outline-primary">
                                                        {randomEncounterMonsters[index].finalSelection ? randomEncounterMonsters[index].finalSelection : 'Choose Your Monsters'}
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        {randomEncounterMonsters[index].filteredMonsterList.map(item => {
                                                            return <Dropdown.Item key={item.id}>{item.name}</Dropdown.Item>})}       
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            )}
                                        </Form>
                                    </div>
                            )})}
                        </div>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-success" onClick={handleSave} >Save</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default RandomEvents;