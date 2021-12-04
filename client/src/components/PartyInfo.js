import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import update from "immutability-helper";
import {
  Form,
  Row,
  Col,
  Button,
  Dropdown,
} from "react-bootstrap";
import { setPlayers } from "../actions";
import "./home.css";

const PartyInfo = ({ onSetPlayers }) => {
  const [partyMemberData, setPartyMemberData] = useState([]);
  const quantity = [3, 4, 5, 6, 7, 8];
  const classTypes = [
    "Barbarian",
    "Bard",
    "Cleric",
    "Druid",
    "Fighter",
    "Monk",
    "Paladin",
    "Ranger",
    "Rogue",
    "Sourcerer",
    "Warlock",
    "Wizard",
  ];
  const levels = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  const [firstDrop, setFirstDrop] = useState(true);

  const setReduxPlayers = (destination, value) => {
    onSetPlayers(destination, value);
  };

  const handleClick = (e) => {
    let playerData = [];
    Array.from(Array(parseInt(e.target.id)).keys()).forEach((m, index) => {
      const newObject = { id: index + 1, name: "", raceClass: "", level: 0 };
      playerData.push(newObject);
    });
    setPartyMemberData(playerData);
  };

  const handlePartyDetails = (ek, e, type) => {
    const jsEvent = e || ek;
    const index = jsEvent.target.id - 1;
    console.log(partyMemberData);
    if (type === "name") {
      const newName = jsEvent.target.value;
      const newPartyMemberData = update(partyMemberData, {
        [index]: {
          $set: {
            id: index + 1,
            name: newName,
            raceClass: partyMemberData[index].raceClass,
            level: partyMemberData[index].level,
          },
        },
      });
      setPartyMemberData(newPartyMemberData);
    } else if (type === "level") {
      const newLevel = jsEvent.target.text;
      if (firstDrop) {
        setFirstDrop(false);
        const defaultLevels = partyMemberData.map((item, idx) => {
          return {
            id: partyMemberData[idx].id,
            level: newLevel,
            name: partyMemberData[idx].name,
            raceClass: partyMemberData[idx].raceClass,
          };
        });
        setPartyMemberData(defaultLevels);
      } else {
        const newPartyMemberData = update(partyMemberData, {
          [index]: {
            $set: {
              id: index + 1,
              name: partyMemberData[index].name,
              raceClass: partyMemberData[index].raceClass,
              level: newLevel,
            },
          },
        });
        setPartyMemberData(newPartyMemberData);
      }
    } else if (type === "race") {
      const newRace = jsEvent.target.name;
      const newPartyMemberData = update(partyMemberData, {
        [index]: {
          $set: {
            id: index + 1,
            name: partyMemberData[index].name,
            raceClass: newRace,
            level: partyMemberData[index].level,
          },
        },
      });
      setPartyMemberData(newPartyMemberData);
    }
  };

  const handleReduxSave = () => {
    setReduxPlayers("playerData", partyMemberData);
  };

  return (
    <div>
      <p>
        Click on the number of party members you plan to have. Must be at least
        3 (exluding the DM) and the max is 8.
      </p>
      <div className="partyBtnSpace">
        {quantity.map((number, idx) => (
          <div key={idx} className="prtyBtns">
            <Button id={number} variant="outline-primary" onClick={handleClick}>
              {number}
            </Button>
          </div>
        ))}
      </div>
      {partyMemberData.length > 0 && (
        <div>
          <div className="forms">
            {partyMemberData.map((partyMember, index) => (
              <div key={partyMember.id}>
                <Form style={{ marginBottom: 5}}>
                  <Row>
                    <Col align-self-center>
                        <Form.Control sm placeholder={`Party Member ${partyMember.id}`} id={partyMember.id} onChange={(ek, e) => handlePartyDetails(ek, e, "name")}/>
                    </Col>
                    <Col md align-self-center>
                      <Dropdown onSelect={(ek, e) => handlePartyDetails(ek, e, "race")}>
                        <Dropdown.Toggle variant="outline-primary">
                          {partyMemberData[index].raceClass ? partyMemberData[index].raceClass : "Choose a Class for this Party Member"}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          {classTypes.map((item, idx) => (
                            <Dropdown.Item
                              key={idx}
                              id={partyMember.id}
                              name={item}>
                              {item}
                            </Dropdown.Item>
                          ))}
                        </Dropdown.Menu>
                      </Dropdown>
                    </Col>
                    <Col md align-self-center>
                      <Dropdown onSelect={(ek, e) => handlePartyDetails(ek, e, "level")}>
                        <Dropdown.Toggle variant="outline-primary">
                          {partyMemberData[index].level ? partyMemberData[index].level : "Choose a level for this party member"}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          {levels.map((item, idx) => (
                            <Dropdown.Item key={idx} id={partyMember.id}>
                              {item}
                            </Dropdown.Item>
                          ))}
                        </Dropdown.Menu>
                      </Dropdown>
                    </Col>
                  </Row>
                </Form>
              </div>
            ))}
          </div>
          <div className="saveBtn">
            <Button variant="outline-success" onClick={handleReduxSave}>
              Save
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { campaign: state.campaignReducer };
};

const mapDispatchtoProps = (dispatch) => ({
  onSetPlayers: bindActionCreators(setPlayers, dispatch),
});

export default connect(mapStateToProps, mapDispatchtoProps)(PartyInfo);
