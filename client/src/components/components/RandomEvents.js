import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { useQuery } from "@apollo/client";
import { Button, Dropdown, Form, Modal } from "react-bootstrap";
import { Slider } from "@material-ui/core";
import { setRandomEncounters } from "../../actions";
import { QUERY_MONSTER_DATA } from "../../utils";
import "../home.css";

const RandomEvents = ({ campaign, onSetRandomEncounters }) => {
  const [randomEncounter, setRandomEncounter] = useState(false);
  const [monsterDrop, setMonsterDrop] = useState([]);
  const [possibleMonsters, setPossibleMonsters] = useState([]);
  const [randomEncounterMonsters, setRandomEncounterMonsters] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const { data, loading, error } = useQuery(QUERY_MONSTER_DATA);
  const monsterData = data?.monsters || [];

  React.useEffect(() => {
      if(monsterData.length > 0) {
        handleMonsterShow();
      }
  }, [monsterData]);

  const setReduxRandomEncounters = (destination, value) => {
    onSetRandomEncounters(destination, value);
  };

  const handleBtnClick = (e) => {
    if (e.target.name === "Yes") {
      setRandomEncounter(true);
    } else {
      setShowModal(!showModal);
    }
  };

  const handleSlider = (e, value) => {
    let randomMonsterObject = [];
    for (let i = 0; i < value; i++) {
      let newObject = { id: i };
      randomMonsterObject.push(newObject);
    }
    setRandomEncounterMonsters(randomMonsterObject);
  };

  const handleMonsterShow = () => {
    const filteredMonsters = (monsterData || []).filter((monster) => {
      for (let i = 0; i < monster.area.length; i++) {
        for (let j = 0; j < campaign.travelPointChoices.length; j++) {
          if (monster.area.includes(campaign.travelPointChoices[j])) {
            return true;
          }
          return false;
        }
      }
    });
    const monsterCategories = [...new Set(filteredMonsters.map((item) => item.category))];
    setMonsterDrop(monsterCategories);
    setPossibleMonsters(filteredMonsters);
  };

  const handleSelect = (ek, e, index) => {
    const filteredMonsters = possibleMonsters.filter((item) => item.category.includes(e.target.text));
    const newMonsterDrops = [...randomEncounterMonsters].map((monster) => {
      if (monster.id === index) {
        return {
          ...monster,
          category: e.target.text,
          filteredMonsterList: filteredMonsters,
        };
      }
      return monster;
    });
    setRandomEncounterMonsters(newMonsterDrops);
  };

  const handleFinalSelect = (ek, e, index) => {
    const newMonsterDrops = [...randomEncounterMonsters].map((monster) => {
      if (monster.id === index) {
        return { ...monster, finalSelection: e.target.text };
      }
      return monster;
    });
    setRandomEncounterMonsters(newMonsterDrops);
  };

  const handleSave = () => {
    setShowModal(!showModal);
    setReduxRandomEncounters("randomEncounters", randomEncounterMonsters);
  };

  if (loading || data === undefined) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>ERROR</div>;
  } else {
    return (
      <div>
        <div style={{ margin: 10}}>
          <Button
            variant="outline-success"
            size="lg"
            onClick={() => setShowModal(!showModal)}>
            Random Encounters
          </Button>
        </div>
        <Modal show={showModal} onHide={() => setShowModal(!showModal)}>
          <Modal.Header closeButton>
            <Modal.Title>Do you want to have a random encounter?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Use the buttons below to add random enounters to your adventure.
              If selected use you can use the table privided in your campaign to
              figure this out later.
            </p>
            <br />
            <div className="sideQuestBtnSpace">
              <div style={{ margin: 2 }}>
                <Button
                  name="Yes"
                  variant="outline-success"
                  onClick={handleBtnClick}>
                  Yes
                </Button>
              </div>
              <div style={{ margin: 2 }}>
                <Button
                  name="No"
                  variant="outline-danger"
                  onClick={handleBtnClick}>
                  No
                </Button>
              </div>
            </div>
            <br />
            <br />
            {randomEncounter && campaign.travelPointChoices.length > 0 && (
              <div>
                <Slider
                  min={0}
                  max={10}
                  defaultValue={0}
                  onChangeCommitted={handleSlider}
                  valueLabelDisplay="on"/>
              </div>
            )}
            {campaign.travelPointChoices.length === 0 && (
              <div>
                <p>
                  You haven't selected enough data about your world to plan
                  this. If you want to plan some random encounters go back to
                  The Physical and pick some areas of interest.
                </p>
              </div>
            )}
            {campaign.travelPointChoices.length > 0 && (
              <div>
                {randomEncounterMonsters.map((space, index) => (
                  <div key={index}>
                    <Form inline>
                      <Dropdown
                        onSelect={(ek, e) => handleSelect(ek, e, index)}
                        name={space.id}
                        style={{ margin: 2 }}>
                        <Dropdown.Toggle variant="outline-primary">
                          {randomEncounterMonsters[index].category ? randomEncounterMonsters[index].category : "Choose Your Monsters"}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          {monsterDrop.map((item, idx) => (
                            <Dropdown.Item key={idx}>{item}</Dropdown.Item>
                          ))}
                        </Dropdown.Menu>
                      </Dropdown>
                      {randomEncounterMonsters[index].category && (
                        <Dropdown
                          onSelect={(ek, e) => handleFinalSelect(ek, e, index)}
                          style={{ margin: 2 }}>
                          <Dropdown.Toggle variant="outline-primary">
                            {randomEncounterMonsters[index].finalSelection ? randomEncounterMonsters[index].finalSelection : "Choose Your Monsters"}
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            {randomEncounterMonsters[index].filteredMonsterList.map((item) => (
                              <Dropdown.Item key={item.id}>
                                {item.name}
                              </Dropdown.Item>
                            ))}
                          </Dropdown.Menu>
                        </Dropdown>
                      )}
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
  onSetRandomEncounters: bindActionCreators(setRandomEncounters, dispatch),
});

export default connect(mapStateToProps, mapDispatchtoProps)(RandomEvents);
