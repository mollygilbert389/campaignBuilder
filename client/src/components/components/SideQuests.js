import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { useQuery } from "@apollo/client";
import { Button, Dropdown, Modal } from "react-bootstrap";
import { Slider } from "@material-ui/core";
import { setSideQuests } from "../../actions";
import { QUERY_SIDE_QUEST_DATA } from "../../utils";
import "../home.css";

const SideQuests = ({ onSetSideQuests }) => {
  const [showModal, setShowModal] = useState(false);
  const [yes, setYes] = useState(false);
  const [sideQuests, setSideQuests] = useState([]);
  const { data, loading, error } = useQuery(QUERY_SIDE_QUEST_DATA);

  const setReduxSideQuests = (destination, value) => {
    onSetSideQuests(destination, value);
  };

  const handleYesNoSideQuest = (e) => {
    switch (e.target.name) {
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
        return { ...item, type: selection };
      }
      return item;
    });
    setSideQuests(newSideQuest);
    setReduxSideQuests("sideQuests", newSideQuest);
  };

  const handleSlider = (e, value) => {
    let sideQuests = [];
    Array.from(Array(value).keys()).forEach((ev, index) => {
      const newObject = { id: index };
      sideQuests.push(newObject);
    });
    setSideQuests(sideQuests);
  };

  if (loading || data === undefined) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>ERROR</div>;
  } else {
    const filteredArr = (data?.sideQuests || []).filter((quest) => sideQuests.every((currQuest) => currQuest.type !== quest.option));

    return (
      <div>
        <div className="btns">
          <Button
            variant="outline-success"
            size="lg"
            onClick={() => setShowModal(!showModal)}>
            Side Quests
          </Button>
        </div>
        <Modal
          size="lg"
          show={showModal}
          onHide={() => setShowModal(!showModal)}>
          <Modal.Header closeButton>
            <Modal.Title>
              This is optional, do you want to add a side quest to your story?
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Use the buttons below to add a side quest to your campaign.</p>
            <br />
            <div className="sideQuestBtnSpace">
              <div className="sideQuestBtns">
                <Button
                  name="Yes"
                  variant="outline-success"
                  onClick={handleYesNoSideQuest}>
                  Yes
                </Button>
              </div>
              <div className="sideQuestBtns">
                <Button
                  name="No"
                  variant="outline-danger"
                  onClick={handleYesNoSideQuest}>
                  No
                </Button>
              </div>
            </div>
            <br />
            <br />
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
            {sideQuests.length > 0 && sideQuests.map((space, index) => (
                <div key={index}>
                    <Dropdown
                    onSelect={(ek, e) => handleSideQuestChoice(ek, e, index)}
                    className="sideQuestBtns">
                    <Dropdown.Toggle variant="outline-primary">
                        {sideQuests[index].type ? sideQuests[index].type : "Choose your Side Quest Goal"}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {filteredArr.map((drop) => (
                        <Dropdown.Item key={drop.id} name={drop.option}>
                            {drop.option}
                        </Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                    </Dropdown>
                </div>
              ))}
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="outline-success"
              onClick={() => setShowModal(!showModal)}>
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
  onSetSideQuests: bindActionCreators(setSideQuests, dispatch),
});

export default connect(mapStateToProps, mapDispatchtoProps)(SideQuests);
