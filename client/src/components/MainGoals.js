import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button, Dropdown, Form } from "react-bootstrap";
import { RollBtn } from "./components";
import { setMainGoal } from "../actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { useQuery } from "@apollo/client";
import { QUERY_GOAL_DATA } from "../utils";
import "./home.css";

const MainGoals = ({ onSetMainGoal }) => {
  const [showModal, setShowModal] = useState(false);
  const [dungeonGoalsClicked, setDungeonGoalsClicked] = useState(true);
  const [mainGoal, setMainGoal] = useState("");
  const [wildernessGoalsClickd, setWildernessGoalsClickd] = useState(false);
  const [otherGoalsClicked, setOtherGoalsClicked] = useState(false);
  const [eventGoalsClicked, setEventGoalsClicked] = useState(false);
  const { loading, data, error } = useQuery(QUERY_GOAL_DATA);
  const goalData = data?.goals || [];

  const setReduxMainGoal = (destination, value) => {
    onSetMainGoal(destination, value);
  };

  const handleGoalCat = (e) => {
    setMainGoal("");
    const selection = e.target.value;
    switch (selection) {
      case "dungeon":
        setDungeonGoalsClicked(true);
        setWildernessGoalsClickd(false);
        setOtherGoalsClicked(false);
        setEventGoalsClicked(false);
        break;
      case "wilderness":
        setDungeonGoalsClicked(false);
        setWildernessGoalsClickd(true);
        setOtherGoalsClicked(false);
        setEventGoalsClicked(false);
        break;
      case "event":
        setDungeonGoalsClicked(false);
        setWildernessGoalsClickd(false);
        setOtherGoalsClicked(false);
        setEventGoalsClicked(true);
        break;
      case "other":
        setDungeonGoalsClicked(false);
        setWildernessGoalsClickd(false);
        setOtherGoalsClicked(true);
        setEventGoalsClicked(false);
        break;
      default:
        return;
    }
  };

  const handleGoalClick = (keyevent, event) => {
    const selection = event.target.text;
    setMainGoal(selection);
    setReduxMainGoal("mainGoal", selection);
  };

  const handleRoll = (feedback) => {
    setMainGoal(feedback);
    setReduxMainGoal("mainGoal", feedback);
  };

  if (loading || data === undefined) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>ERRROR</div>;
  } else {
    const eventGoals = goalData.filter((item) => item.type === "event");
    const otherGoals = goalData.filter((item) => item.type === "other");
    const dungeonGoals = goalData.filter((item) => item.type === "dungeon");
    const wildernessGoals = goalData.filter((item) => item.type === "wilderness");

    return (
      <div>
        <div className="btns">
          <Button
            variant="outline-success"
            size="lg"
            onClick={() => setShowModal(!showModal)}>
            Adventure Goals
          </Button>
        </div>
        <Modal
          size="lg"
          show={showModal}
          onHide={() => setShowModal(!showModal)}>
          <Modal.Header closeButton>
            <Modal.Title>Let's Figure Out Some Goals</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Use the buttons below to figure out your main adventure goal. Each
              button represents a different goal category.
            </p>
            <br />
            <div className="container adventureBtns">
              <Button
                className="dunTypeBtns"
                variant="outline-primary"
                onClick={handleGoalCat}
                value={"dungeon"}>
                Dungeon Type Goals
              </Button>
              <Button
                className="dunTypeBtns"
                variant="outline-primary"
                onClick={handleGoalCat}
                value={"wilderness"}>
                Wilderness Type Goals
              </Button>
              <Button
                className="dunTypeBtns"
                variant="outline-primary"
                onClick={handleGoalCat}
                value={"event"}>
                Event Type Goals
              </Button>
              <Button
                className="dunTypeBtns"
                variant="outline-primary"
                onClick={handleGoalCat}
                value={"other"}>
                Other Type Goals
              </Button>
            </div>
            <br />
            <div className="d-flex flex-column align-items-center">
              <Form inline>
                {dungeonGoalsClicked && (
                  <div>
                    <Dropdown onSelect={handleGoalClick}>
                      <Dropdown.Toggle variant="outline-primary">
                        {mainGoal ? `Goal: ${mainGoal}` : "Choose Overal Campaign Goal"}
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        {dungeonGoals.map((drop) => (
                          <Dropdown.Item key={drop.id} name={drop.option}>
                            {drop.option}
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                )}
                {wildernessGoalsClickd && (
                  <div>
                    <Dropdown onSelect={handleGoalClick}>
                      <Dropdown.Toggle variant="outline-primary">
                        {mainGoal ? `Goal: ${mainGoal}` : "Choose Overal Campaign Goal"}
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        {wildernessGoals.map((drop) => (
                          <Dropdown.Item key={drop.id} name={drop.option}>
                            {drop.option}
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                )}
                {otherGoalsClicked && (
                  <div>
                    <Dropdown onSelect={handleGoalClick}>
                      <Dropdown.Toggle variant="outline-primary">
                        {mainGoal ? `Goal: ${mainGoal}` : "Choose Overal Campaign Goal"}
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        {otherGoals.map((drop) => (
                          <Dropdown.Item key={drop.id} name={drop.option}>
                            {drop.option}
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                )}
                {eventGoalsClicked && (
                  <div>
                    <Dropdown onSelect={handleGoalClick}>
                      <Dropdown.Toggle variant="outline-primary">
                        {mainGoal ? `Goal: ${mainGoal}` : "Choose Overal Campaign Goal"}
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        {eventGoals.map((drop) => (
                          <Dropdown.Item key={drop.id} name={drop.option}>
                            {drop.option}
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                )}
                <RollBtn
                  name="mainGoal"
                  handleRoll={handleRoll}
                  rollingArray={(goalData || []).map((item) => item.option)}
                />
              </Form>
            </div>
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
  onSetMainGoal: bindActionCreators(setMainGoal, dispatch),
});

export default connect(mapStateToProps, mapDispatchtoProps)(MainGoals);
