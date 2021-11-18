import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button, Dropdown, Form } from 'react-bootstrap';
import { RollBtn } from "./components";
import "./home.css";
import { goal_data } from "./components/data";
import { setMainGoal } from "../actions/index";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const MainGoals = ({ onSetMainGoal }) => {
    const [goalsCat, setGoalsCat] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [dungeonGoalsClicked, setDungeonGoalsClicked] = useState(true);
    const [mainGoal, setMainGoal] = useState("");
    const [wildernessGoalsClickd, setWildernessGoalsClickd] = useState(false);
    const [otherGoalsClicked, setOtherGoalsClicked] = useState(false);
    const [eventGoalsClicked, setEventGoalsClicked] = useState(false);
    const allDungeonGoals = goal_data.dungeonGoals.map((item) => item.goal);
    const allWildernessGoals = goal_data.wildernessGoals.map((item) => item.goal);
    const allEventGoals = goal_data.eventGoals.map((item) => item.goal);
    const allOtherGoals = goal_data.otherGoals.map((item) => item.goal);
    const allGoals = [...allDungeonGoals, ...allWildernessGoals, ...allEventGoals, ...allOtherGoals];

    const setReduxMainGoal = (destination, value) => {
        onSetMainGoal(destination, value)
    };

    const handleGoalCat = (event) => {
        setMainGoal("");
        console.log(event.target.value)
        let selection = event.target.value;
        switch(selection) {
            case "dungeon":
                setGoalsCat(selection);
                setDungeonGoalsClicked(true);
                setWildernessGoalsClickd(false);
                setOtherGoalsClicked(false);
                setEventGoalsClicked(false);
            break;
            case "wilderness":
                setGoalsCat(selection);
                setDungeonGoalsClicked(false);
                setWildernessGoalsClickd(true);
                setOtherGoalsClicked(false);
                setEventGoalsClicked(false);
            break;
            case "event":
                setGoalsCat(selection);
                setDungeonGoalsClicked(false);
                setWildernessGoalsClickd(false);
                setOtherGoalsClicked(false);
                setEventGoalsClicked(true);
            break;
            case "other":
                setGoalsCat(selection);
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

    return (
        <div>
            <div className="btns">
                <Button variant="outline-success" size="lg" onClick={() => setShowModal(!showModal)}>Adventure Goals</Button>
            </div>
            <Modal size="lg" show={showModal} onHide={() => setShowModal(!showModal)}>
                <Modal.Header closeButton>
                    <Modal.Title>Let's Figure Out Some Goals</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Use the buttons below to figure out your main adventure goal. Each button represents a different goal category.</p>
                    <br/>
                    <div className="container adventureBtns">
                        <Button className="dunTypeBtns" variant="outline-primary" onClick={handleGoalCat} value={"dungeon"}>Dungeon Type Goals</Button>
                        <Button className="dunTypeBtns" variant="outline-primary" onClick={handleGoalCat} value={"wilderness"}>Wilderness Type Goals</Button>
                        <Button className="dunTypeBtns" variant="outline-primary" onClick={handleGoalCat} value={"event"}>Event Type Goals</Button>
                        <Button className="dunTypeBtns" variant="outline-primary" onClick={handleGoalCat} value={"other"}>Other Type Goals</Button>
                    </div>
                    <br/>
                    <div className="d-flex flex-column align-items-center">
                        <Form inline>
                            {dungeonGoalsClicked && (
                                <div>
                                    <Dropdown onSelect={handleGoalClick}>
                                        <Dropdown.Toggle variant="outline-primary">
                                            {mainGoal ? `Goal: ${mainGoal}`: 'Choose Overal Campaign Goal'}
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            {goal_data.dungeonGoals.map((drop) => (<Dropdown.Item key={drop.id} name={drop.goal}> {drop.goal}</Dropdown.Item>))}
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            )}
                            {wildernessGoalsClickd && (
                                <div>
                                    <Dropdown onSelect={handleGoalClick}>
                                        <Dropdown.Toggle variant="outline-primary">
                                            {goal_data.mainGoal ? `Goal: ${mainGoal}`: 'Choose Overal Campaign Goal'}
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            {goal_data.wildernessGoals.map((drop) => (<Dropdown.Item key={drop.id} name={drop.goal}> {drop.goal}</Dropdown.Item>))}
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            )}
                            {otherGoalsClicked && (
                                <div>
                                    <Dropdown onSelect={handleGoalClick}>
                                        <Dropdown.Toggle variant="outline-primary">
                                            {mainGoal ? `Goal: ${mainGoal}`: 'Choose Overal Campaign Goal'}
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            {goal_data.otherGoals.map((drop) => (<Dropdown.Item key={drop.id} name={drop.goal}> {drop.goal}</Dropdown.Item>))}
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            )}
                            {eventGoalsClicked && (
                                <div>
                                    <Dropdown onSelect={handleGoalClick}>
                                        <Dropdown.Toggle variant="outline-primary">
                                        {mainGoal ? `Goal: ${mainGoal}`: 'Choose Overal Campaign Goal'}
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            {goal_data.eventGoals.map((drop) => (<Dropdown.Item key={drop.id} name={drop.goal}> {drop.goal}</Dropdown.Item>))}
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            )}
                            <RollBtn name="mainGoal" handleRoll={handleRoll} rollingArray={allGoals}/>
                        </Form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-success" onClick={() => setShowModal(!showModal)} >Save</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {campaign: state.campaignReducer}
}

const mapDispatchtoProps = (dispatch) => ({
    onSetMainGoal: bindActionCreators(setMainGoal, dispatch)
});

export default connect(mapStateToProps, mapDispatchtoProps)(MainGoals);