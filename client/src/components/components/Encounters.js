import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button, Dropdown, Form } from "react-bootstrap";
import { Slider } from "@material-ui/core";
import { setEncounters } from "../../actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { useQuery } from "@apollo/client";
import { QUERY_ENCOUNTER_DATA } from "../../utils";
import "../home.css";

const Encounters = ({ onSetEncounters }) => {
  const [showModal, setShowModal] = useState(false);
  const [encounterEvents, setEncounterEvents] = useState([]);
  const { loading, data, error } = useQuery(QUERY_ENCOUNTER_DATA);

  const setReduxEncounters = (destination, value) => {
    onSetEncounters(destination, value);
  };

  const handleSlider = (e, value) => {
    let encounterEvents = [];
    Array.from(Array(value).keys()).forEach((ev, index) => {
      const newObject = { id: index };
      encounterEvents.push(newObject);
    });
    setEncounterEvents(encounterEvents);
  };

  const handleSelect = (ek, e, index) => {
    const encounterObject = [...encounterEvents].map((item) => {
      if (item.id === index) {
        return { ...item, type: e.target.text };
      }
      return item;
    });
    setEncounterEvents(encounterObject);
  };

  const handleDifficultySelect = (ek, e, index) => {
    const encounterObject = [...encounterEvents].map((item) => {
      if (item.id === index) {
        return { ...item, difficulty: e.target.text };
      }
      return item;
    });
    setEncounterEvents(encounterObject);
  };

  const handleSave = () => {
    setShowModal(!showModal);
    setReduxEncounters("encounters", encounterEvents);
  };

  if (loading || data === undefined) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>ERROR</div>;
  } else {
    return (
      <div>
        <div className="btns">
          <Button
            variant="outline-success"
            size="lg"
            onClick={() => setShowModal(!showModal)}>
            Encounters
          </Button>
        </div>
        <Modal show={showModal} onHide={() => setShowModal(!showModal)}>
          <Modal.Header closeButton>
            <Modal.Title>
              Your adventure should have some encounters to give the players
              something to do, and help progress the story along.
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Below are some buttons to help you decide some encounters. These
              will happen organically in your story, and it's up to your players
              to ultimately decide what to do, but you can help move them along.
            </p>
            <br />
            <Slider
              min={0}
              max={5}
              defaultValue={0}
              onChangeCommitted={handleSlider}
              valueLabelDisplay="on"/>
            {encounterEvents.length > 0 && (
              <div>
                {encounterEvents.map((space, idx) => (
                  <div>
                    <Form inline>
                      <Dropdown
                        onSelect={(ek, e) => handleSelect(ek, e, idx)}
                        name={space.id}
                        className="sideQuestBtns">
                        <Dropdown.Toggle variant="outline-primary">
                          {encounterEvents[idx].type ? encounterEvents[idx].type : "Choose an Encounter Goal"}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          {data.encounters.map((item) => (
                            <Dropdown.Item
                                key={item.id}
                                name={item.option}>
                                {item.option}
                            </Dropdown.Item>
                          ))}
                        </Dropdown.Menu>
                      </Dropdown>
                      <Dropdown
                        onSelect={(ek, e) => handleDifficultySelect(ek, e, idx)}
                        className="sideQuestBtns">
                        <Dropdown.Toggle variant="outline-primary">
                          {encounterEvents[idx].difficulty ? encounterEvents[idx].difficulty : "Choose the Difficulty"}
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
                ))}
              </div>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-success" onClick={handleSave}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return { campaign: state.campaignReducer };
};

const mapDispatchtoProps = (dispatch) => ({
  onSetEncounters: bindActionCreators(setEncounters, dispatch),
});

export default connect(mapStateToProps, mapDispatchtoProps)(Encounters);
