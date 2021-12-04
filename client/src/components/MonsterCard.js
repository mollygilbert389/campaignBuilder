import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { useQuery } from "@apollo/client";
import { Button, Form, Dropdown, Modal } from "react-bootstrap";
import { Slider } from "@material-ui/core";
import { setDungeonData } from "../actions";
import { QUERY_MONSTER_DATA } from "../utils";
import "./home.css";

const MonsterCard = ({ campaign, onSetDungeonData }) => {
  const [showModal, setShowModal] = useState(false);
  const [monsters, setMonsters] = useState([]);
  const [monsterCategories, setMonsterCategories] = useState([]);
  const { data, loading, error } = useQuery(QUERY_MONSTER_DATA);

  const setReduxDungeonData = (destination, value) => {
    onSetDungeonData(destination, value);
  };

  const createMonsterForm = () => {
    const monsterCategories = data?.monsters.map((item) => item.category);
    const filterMonsterCategories = [...new Set(monsterCategories)];
    let sideMonsterObject = [];
    Array.from(Array(campaign.dungeonData.monsterNum).keys()).forEach(
      (ev, index) => {
        const newObject = { id: index };
        sideMonsterObject.push(newObject);
      }
    );
    setMonsters(sideMonsterObject);
    setMonsterCategories(filterMonsterCategories);
  };

  const handleSelect = (e, index) => {
    const filteredMonsters = data?.monsters.filter((item) => item.category === e.target.text);
    const newMonsterDrops = [...monsters].map((monster) => {
      if (monster.id === index) {
        return {
          ...monster,
          category: e.target.text,
          monsterTypes: filteredMonsters,
        };
      }
      return monster;
    });
    setMonsters(newMonsterDrops);
  };

  const handleMonsterTypeSelect = (e, index) => {
    const newMonsterDrops = [...monsters].map((monster) => {
      if (monster.id === index) {
        return { ...monster, monsterName: e.target.text };
      }
      return monster;
    });
    setMonsters(newMonsterDrops);
  };

  const handleSave = () => {
    setReduxDungeonData("dungeonData", {...campaign.dungeonData, monsterList: monsters});
    setShowModal(!showModal);
  };

  React.useEffect(() => {
    if (campaign.dungeonData.monsterNum !== undefined) {
      createMonsterForm();
    }
  }, [campaign]);

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
            Monsters
          </Button>
        </div>
        <Modal show={showModal} onHide={() => setShowModal(!showModal)}>
          <Modal.Header closeButton>
            <Modal.Title>Monster Time!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Now it's time to choose some monsters!</p>
            <p>
              Since you have chosen {campaign.rooms} rooms we reccomend chosing{" "}
              {campaign.dungeonData.monsterNum}
              total monsters and no more than{" "}
              {campaign.dungeonData.maxMonsterNum}. How many monsters would you
              like in your dungeon?
            </p>
            <br />
            <br />
            <div>
              <Slider
                min={4}
                max={20}
                defaultValue={campaign.dungeonData.monsterNum}
                valueLabelDisplay="on"
                onChangeCommitted={(e, value) => setReduxDungeonData("dungeonData", {...campaign.dungeonData, monsterNum: value})
                }/>
            </div>
            {monsters.map((space, index) => (
              <div>
                <Form inline className="mb-2 mr-sm-2 mb-sm-0">
                  <Dropdown
                    onSelect={(ek, e) => handleSelect(e, index)}
                    name={space.id}
                    style={{ margin: 2 }}>
                    <Dropdown.Toggle variant="outline-primary">
                      {monsters[index].category ? monsters[index].category : "Monster Categories"}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {monsterCategories.map((item, idx) => (
                        <Dropdown.Item key={idx}>{item}</Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                  {monsters[index].monsterTypes && (
                    <Dropdown
                      onSelect={(ek, e) => handleMonsterTypeSelect(e, index)}
                      style={{ margin: 2 }}>
                      <Dropdown.Toggle variant="outline-primary">
                        {monsters[index].monsterName ? monsters[index].monsterName : "Monster Type"}
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        {monsters[index].monsterTypes.map((item) => (
                          <Dropdown.Item name={item.name} key={item.id}>
                            {item.name}
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                  )}
                </Form>
              </div>
            ))}
            <br />
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
  onSetDungeonData: bindActionCreators(setDungeonData, dispatch),
});

export default connect(mapStateToProps, mapDispatchtoProps)(MonsterCard);
