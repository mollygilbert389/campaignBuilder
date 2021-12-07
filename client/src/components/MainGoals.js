import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { useQuery } from "@apollo/client";
import { Button, Dropdown, Form, Modal, Row, Col } from "react-bootstrap";
import { RollBtn } from "./components";
import { setMainGoal } from "../actions";
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
    switch (e.target.value) {
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

  const handleGoalClick = (ek, e) => {
    setMainGoal(e.target.text);
    setReduxMainGoal("mainGoal", e.target.text);
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
        <div style={{ margin: 10}}>
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
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
              <Button
                style={{ margin: 5 }}
                variant={dungeonGoalsClicked ? "primary" : "outline-primary" }
                onClick={handleGoalCat}
                value={"dungeon"}>
                Dungeon Type Goals
              </Button>
              <Button
                style={{ margin: 5 }}
                variant={wildernessGoalsClickd ? "primary" : "outline-primary" }
                onClick={handleGoalCat}
                value={"wilderness"}>
                Wilderness Type Goals
              </Button>
              <Button
                style={{ margin: 5 }}
                variant={eventGoalsClicked ? "primary" : "outline-primary" }
                onClick={handleGoalCat}
                value={"event"}>
                Event Type Goals
              </Button>
              <Button
                style={{ margin: 5 }}
                variant={otherGoalsClicked ? "primary" : "outline-primary" }
                onClick={handleGoalCat}
                value={"other"}>
                Other Type Goals
              </Button>
            </div>
            <br />
            <div className="d-flex flex-column align-items-center">
              <Form>
                <Row>
                  <Col>
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
                  </Col>
                  <Col>
                    <RollBtn
                      handleRoll={handleRoll}
                      rollingArray={(goalData || []).map((item) => item.option)}/>
                  </Col>
                </Row>
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
