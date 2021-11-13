import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import "./style.css";

const Rooms = ({ campaign, setReduxDungeonData }) => {
    const [showModal, setShowModal] = useState(false);
    const [roomNum, setRoomNum] = useState("");
    const roomOptions = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

    const handleActBtn = (event) => {
        const choice = event.target.name;
        const currentDungeonData = campaign.dungeonData;
        const destructedData = {...currentDungeonData, rooms: choice};
        setRoomNum(choice);
        setShowModal(!showModal);
        suggestMeMonsters();       
        setReduxDungeonData("dungeonData", destructedData);
    };

    function suggestMeMonsters() {
        let roomNum = parseInt(roomNum)
        let suggestedMonsterNum = 0
        let maxMonsterNum = 0
        if (roomNum <= 5) {
            suggestedMonsterNum = 10
            maxMonsterNum = 20
        } else if (roomNum <= 10) {
            suggestedMonsterNum = 6
            maxMonsterNum = 13
        } else if (roomNum > 10) {
            suggestedMonsterNum = 4
            maxMonsterNum = 10
        }
        const currentDungeonData = campaign.dungeonData;
        const destructedData = {...currentDungeonData, suggestedMonsterNum:suggestedMonsterNum, maxMonsterNum: maxMonsterNum};
        setReduxDungeonData("dungeonData", destructedData);
    }

    return (
        <div>
            <div className="btns">
                <Button id="" variant="outline-success" size="lg" onClick={() => setShowModal(!showModal)}>Rooms</Button>
            </div>
            <Modal show={showModal} onHide={() => setShowModal(!showModal)}>
                <Modal.Header closeButton>
                    <Modal.Title>Name that Room!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>How many rooms are in this dungeon.</p>
                    <p>This is your custom campaign, have as many rooms as you'd like!</p>
                    <div className="roomSpace">
                        {roomOptions.map(item => {
                            return (
                                <div className="roomBtns">
                                    <Button name={item} variant="outline-primary" onClick={handleActBtn}>{item}</Button>
                                </div>
                            )}
                        )}
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default Rooms;