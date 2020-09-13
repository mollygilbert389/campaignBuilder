import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import {Button, Dropdown, Form, FormControl, OverlayTrigger, Tooltip} from 'react-bootstrap'
import "../style.css"

class AdventureGoals extends Component {
    state ={
        goalsCat: "",
        pillar: "",
        dungeonGoalsClicked: false,
        finalDungeonChoice: "",
        wildernessGoalsClickd: false,
        otherGoalsClicked: false, 
        dungeonGoals: [
            {id:1, goal:"Stop the dungeon's monstrous inhabitants from raiding the surface world"},
            {id:2, goal:"Foil a villain's evil plan"},
            {id:3, goal:"Destroy a magical threat inside the dungeon"},
            {id:4, goal:"Acquire treasue"},
            {id:5, goal:"Find a particular item for a specefic purpose"},
            {id:6, goal:"Retrieve a stolen item hidden in the dungeon"},
            {id:7, goal:"Find information needed for a special purpose"},
            {id:8, goal:"Rescue a captive"},
            {id:9, goal:"Discover the fate of a previous adventuring party"},
            {id:10, goal:"Find an NPC who disappeared in the area"},
            {id:11, goal:"Slay a dragon or some other challenging monster"},
            {id:12, goal:"Discover the nature or origin of a strange location or phenomenon"},
            {id:13, goal:"Pursue fleeing foes taking refuge in the dungeon"},
            {id:14, goal:"Escape from captivity in the dungeon"},
            {id:15, goal:"Clear a ruin so it can be rebuilt of reoccupied"},
            {id:16, goal:"Discover why a villain is interested in the dungeon"},
            {id:17, goal:"Win a bet or complete a rite of passage by surviving the dungeon for a certain amount of time"},
            {id:18, goal:"Parley with the villain in the dungeon"},
            {id:19, goal:"Hide from a threat outside the dungeon"},
        ],
        
        wildernessGoals: [
            {id:1, goal:"Locate a dungeon or other site of interest"},
            {id:2, goal:"Assess the scope of a natural or unnatural disaster"},
            {id:3, goal:"Escort an NPC to a destination"},
            {id:4, goal:"Arrive at a destination without being seen by the villain's forces"},
            {id:5, goal:"Stop monsters from raiding caravans and farms"},
            {id:6, goal:"Establish trade with a distant town"},
            {id:7, goal:"Protect a caravan traveling to a distant town"},
            {id:8, goal:"Map a new land"},
            {id:9, goal:"Find a new place and establish a colony"},
            {id:10, goal:"Find a natural resource"},
            {id:11, goal:"Hunt a specific monster"},
            {id:12, goal:"Return home from a distant place"},
            {id:13, goal:"Obtain information from a reclusive hermit"},
            {id:14, goal:"Find an object that was lost in the wilds"},
            {id:15, goal:"Discover the fate of a missing group of explorers"},
            {id:16, goal:"Pursue fleeing foes"},
            {id:17, goal:"Assess the size of an approaching army"},
            {id:18, goal:"Escape the reign of a tyrant"},
            {id:19, goal:"Protect a wilderness site from attackers"},
        ],
        
        otherGoals: [
            {id:1, goal:"Seize control of a fortified location such as a fortress, town, or ship"},
            {id:2, goal:"Defend o location from attackers"},
            {id:3, goal:"Retrieeve an object fro inside a secure location in a settlement"},
            {id:4, goal:"Retrieve an object from a caravan"},
            {id:5, goal:"Salvage an object or goods from a lost vessel or caravan"},
            {id:6, goal:"Break a prisoner out of jail or prison camp"},
            {id:7, goal:"Escape from a jail or prison camp"},
            {id:8, goal:"Successfully travel through an obstacle course to gain recognition or reward"},
            {id:9, goal:"Infiltrate a fortified location"},
            {id:10, goal:"Find the source of strange occurrences in a haunted house or other location"},
            {id:11, goal:"Interfere with the operation of a business"},
            {id:12, goal:"Rescue a character, monster, or object from a natural or unnatural disaster"},
        ]
    }

    handleGoalClick = (eventKey, event) => {
        this.setState({
            goals: event.target.text
        })
    }

    handleClick = () => {
        this.setState({
            showModal: !this.state.showModal,
        })
    }

    handlePillarBtn = (selection) =>  {
        // event.target.text
        this.setState({
        pillar: selection,           
        }, () => {
            // this.props.setPillar(this.state.pillar)
        })
    }

    handleGoalCat = (keyevent, event) => {
        let selection = event.target.text

        switch(selection) {
            case "Have a Main Dungeon Goal":
                this.setState({
                    goalsCat: selection,
                    dungeonGoalsClicked: true,
                    wildernessGoalsClickd: false,
                    otherGoalsClicked: false
                })
            break;
            case "Have a Main Wilderness Goal":
                this.setState({
                    goalsCat: selection,
                    dungeonGoalsClicked: false,
                    wildernessGoalsClickd: true,
                    otherGoalsClicked: false
                })
            break;
            case "Other":
                this.setState({
                    goalsCat: selection,
                    dungeonGoalsClicked: false,
                    wildernessGoalsClickd: false,
                    otherGoalsClicked: true
                })
            break;
            default: 
            return;
        }
    }

    handleGoalClick = (keyevent, event) => {
        this.setState({
            finalDungeonChoice: event.target.text
        })
    }


render() {  

    return (
        <div>
            <div className="btns">
                <Button variant="outline-success" size="lg" onClick={this.handleClick}>Adventure Goals
                </Button>
            </div>
            <Modal size="lg" show={this.state.showModal} onHide={this.handleClick}>
                <Modal.Header closeButton>
                    <Modal.Title>Let's Figure Out Some Goals</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Use the dropdown below to decicde.</p>
                    
                    <br></br>

                    <p>Here you will choose your adventure type. We reccomend a Combat pillar for a short campaign, but you can have any type of campaign you choose!</p>
                        <div>
                            <Button onClick={() => this.handlePillarBtn("Combat")} variant="outline-success" name="Combat" size="lg" block>
                            Combat
                            </Button>
                            <Button onClick={() => this.handlePillarBtn("Interaction")} variant="outline-warning" name="Interaction" size="lg" block>
                            Interaction
                            </Button>
                            <Button onClick={() => this.handlePillarBtn("Exploration")} variant="outline-danger" name="Exploration" size="lg" block>
                            Exploration
                            </Button>
                        </div>

                    <br></br>

                    <Dropdown onSelect={this.handleGoalCat}>
                        <Dropdown.Toggle variant="outline-primary">
                        {this.state.goalsCat ? this.state.goalsCat: 'Choose a Type of Goal'}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item>Have a Main Dungeon Goal</Dropdown.Item>
                            <Dropdown.Item>Have a Main Wilderness Goal</Dropdown.Item>
                            <Dropdown.Item>Other</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <br></br>

                    {this.state.dungeonGoalsClicked && (<div>
                        <Dropdown onSelect={this.handleGoalClick}>
                            <Dropdown.Toggle variant="outline-primary">
                            {this.state.finalDungeonChoice ? this.state.finalDungeonChoice: 'Choose Overal Campaign Goal'}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {this.state.dungeonGoals.map(drop => {
                                    return <Dropdown.Item key={drop.id} name={drop.goal}> {drop.goal}</Dropdown.Item>
                                })}
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>)}

                    {this.state.wildernessGoalsClickd && (<div>
                        <Dropdown onSelect={this.handleGoalClick}>
                            <Dropdown.Toggle variant="outline-primary">
                            {this.state.finalDungeonChoice ? this.state.finalDungeonChoice: 'Choose Overal Campaign Goal'}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {this.state.wildernessGoals.map(drop => {
                                    return <Dropdown.Item key={drop.id} name={drop.goal}> {drop.goal}</Dropdown.Item>
                                })}
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>)}

                    {this.state.otherGoalsClicked && (<div>
                        <Dropdown onSelect={this.handleGoalClick}>
                            <Dropdown.Toggle variant="outline-primary">
                            {this.state.finalDungeonChoice ? this.state.finalDungeonChoice: 'Choose Overal Campaign Goal'}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {this.state.otherGoals.map(drop => {
                                    return <Dropdown.Item key={drop.id} name={drop.goal}> {drop.goal}</Dropdown.Item>
                                })}
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>)}
                    
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="outline-success" onClick={this.handleClick} >Save</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
}

export default AdventureGoals;