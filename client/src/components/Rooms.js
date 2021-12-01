import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import { setDungeonData } from "../actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "./home.css";

const Rooms = ({ campaign, onSetDungeonData }) => {
  const [showModal, setShowModal] = useState(false);
  const [roomNumber, setRoomNumber] = useState(0);
  const roomOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  const setReduxDungeonData = (destination, value) => {
    onSetDungeonData(destination, value);
  };

  const handleActBtn = (e) => {
    setRoomNumber(roomNumber);
    setShowModal(!showModal);
    const { maxMonsterNum, monsterNum } = suggestMeMonsters(parseInt(e.target.name));
    const destructedData = {
      ...campaign.dungeonData,
      monsterNum: monsterNum,
      maxMonsterNum: maxMonsterNum,
      rooms: parseInt(e.target.name)
    };
    setReduxDungeonData("dungeonData", destructedData);
  };

  function suggestMeMonsters(roomNum) {
    let monsterNum = 0;
    let maxMonsterNum = 0;
    if (roomNum <= 5) {
      monsterNum = 10;
      maxMonsterNum = 20;
    } else if (roomNum <= 10) {
      monsterNum = 6;
      maxMonsterNum = 13;
    } else if (roomNum > 10) {
      monsterNum = 4;
      maxMonsterNum = 10;
    }
    return { maxMonsterNum, monsterNum };
  }

  return (
    <div>
      <div className="btns">
        <Button
          variant="outline-success"
          size="lg"
          onClick={() => setShowModal(!showModal)}>
          Rooms
        </Button>
      </div>
      <Modal show={showModal} onHide={() => setShowModal(!showModal)}>
        <Modal.Header closeButton>
          <Modal.Title>Name that Room!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>How many rooms are in this dungeon.</p>
          <p>This is your custom campaign, have as many rooms as you'd like!</p>
          <div className="roomSpace">
            {roomOptions.map((item, idx) => (
              <div className="roomBtns" key={idx}>
                <Button
                  name={item}
                  variant="outline-primary"
                  onClick={handleActBtn}>
                  {item}
                </Button>
              </div>
            ))}
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { campaign: state.campaignReducer };
};

const mapDispatchtoProps = (dispatch) => ({
  onSetDungeonData: bindActionCreators(setDungeonData, dispatch),
});

export default connect(mapStateToProps, mapDispatchtoProps)(Rooms);
