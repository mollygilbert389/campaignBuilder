import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button, Form, Dropdown } from 'react-bootstrap';
import { Slider } from '@material-ui/core';
import { monsters } from "./data";
import "./style.css";

const MonsterCard = ({ campaign, setReduxDungeonDate }) => {
    const [showModal, setShowModal] = useState(false);
    const [finalMonsterNum, setFinalMonsterNum] = useState(0);
    const [monsterData, setMonsterData] = useState([]);
    const [monsterCategories, setMonsterCategories] = useState([]);

    const handleSlider = (event, value) => {
        setFinalMonsterNum(value);
        createMonsterForm();
    };

    const createMonsterForm = () => {
        const monsterCategories = monsters.map(item => item.category);
        const filterMonsterCategories = [...new Set(monsterCategories)];
        const monsterFormNumber = finalMonsterNum;
        let sideMonsterObject = [];
        for (let i=0; i < monsterFormNumber; i++) {
            let newObject = {id:i}
            sideMonsterObject.push(newObject)
        };
        setMonsterData(sideMonsterObject);
        setMonsterCategories(filterMonsterCategories);
    };

    const handleSelect = (eventKey, event, index) => {
        const selection = event.target.text;
        const filteredMonsters = monsters.filter(item => (item.category === selection));
        const newMonsterDrops = [...monsterData].map(monster => {
            if (monster.id===index) {
                return {...monster, category:selection, monsterTypes:filteredMonsters}
            } return monster
        });
        setMonsterData(newMonsterDrops);
    };

    const handleMonsterTypeSelect = (eventKey, event, index) => {
        const finalSelection = event.target.text;
        const newMonsterDrops = [...monsterData].map(monster => {
            if (monster.id===index) {
                return {...monster, monsterName:finalSelection}
            } return monster
        });
        setMonsterData(newMonsterDrops);
    };

    const handleSave = () => {
        const currentDungeonData = campaign.dungeonData;
        const currentMonsters = monsterData;
        const destructedData = {...currentDungeonData, monsterList: currentMonsters};
        setShowModal(!showModal);
        setReduxDungeonDate("dungeonData", destructedData)
    };

    return (
        <div>
            <div className="btns">
                <Button variant="outline-success" size="lg" onClick={() => setShowModal(!showModal)}>Monsters</Button>
            </div>
            <Modal 
                show={showModal} 
                onHide={() => setShowModal(!showModal)}>
                <Modal.Header closeButton>
                    <Modal.Title>Monster Time!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Now it's time to choose some monsters!</p>
                    <p>
                        Since you have chosen {campaign.rooms} rooms we reccomend chosing {campaign.dungeonData.suggestedMonsterNum} 
                        total monsters and no more than {campaign.dungeonData.maxMonsterNum}. 
                        How many monsters would you like in your dungeon?
                    </p>
                    <br/>
                    <br/>
                    <div>
                        <Slider
                            min={4}
                            max={20}
                            defaultValue={campaign.dungeonData.suggestedMonsterNum}
                            valueLabelDisplay="on"
                            onChangeCommitted={handleSlider}/>
                    </div>
                    {monsterData.map((space, index) => {
                        return (
                            <div>
                                <Form inline className="mb-2 mr-sm-2 mb-sm-0">
                                    <Dropdown onSelect={(keyEvent, event) => handleSelect(keyEvent, event, index)} name={space.id}>
                                        <Dropdown.Toggle variant="outline-primary">
                                            {monsterData[index].category ? monsterData[index].category : 'Monster Categories'}
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            {monsterCategories.map(item => {
                                                return <Dropdown.Item>{item}</Dropdown.Item>
                                            })}
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    {monsterData[index].monsterTypes && (
                                        <Dropdown onSelect={(keyEvent, event) => handleMonsterTypeSelect(keyEvent, event, index)}>
                                            <Dropdown.Toggle variant="outline-primary">
                                                {monsterData[index].monsterName ? monsterData[index].monsterName : 'Monster Type'}
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                {monsterData[index].monsterTypes.map(item => {
                                                    return <Dropdown.Item name={item.name} key={item.id}>{item.name}</Dropdown.Item>
                                                })}
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    )}
                                </Form>
                            </div>
                        )
                    })}
                    <br/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-success" onClick={handleSave}> Save</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default MonsterCard;