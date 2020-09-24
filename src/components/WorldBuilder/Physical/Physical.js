import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import RollBtn from "../../StaticComps/RollBtn"
import {Button, Dropdown, Form, FormControl, FormGroup, OverlayTrigger, Tooltip} from 'react-bootstrap'
import "../style.css"

class Physical extends Component {

    state = {
        showModal: false,
        world: "",
        uniqueFeature: "",
        era:"",
        mapScale: "",
        charMeeting: "",
        rolledClicked: false,
        worldOptions: [
            "Aquatic",
            "Desert",
            "Grassland",
            "Savanna",
            "Taiga",
            "Temperate Forest",
            "Tropical Rainforest",
            "Tundra",
        ],
        eraOptions: [
            "Beowulf Adventure Trope (The age of heros magic is common)",
            "Victorian Era (The time of romance magic is uncommon)",
            "Present Day (Modern technology magic does not exist)",
            "Steampunk Future (Technology & chivalry rule and magic is common)",
            "Dystopian Post Appocolypse (Chaos magic is uncommon)",
        ],
        featureOptions: [
            "At the base of a dorment valcano",
            "Extreme Weather",
            "Architecutral building or Massive Statue",
            "Many moons",
            "Large Bodies of Water",
            "Large Mountains",
            "Local Ruins",
            "Large Forest",
            "Swamp or Delta",
            "Religious Site",
            "Deserted City",
            "Canyon or Gorge",
            "Northern Lights",
        ],
        mapScaleOptions: [
            "Village",
            "Town",
            "City",
        ],
        meetingOptions: [
            "Meet in a tavern about a contract",
            "Party has already adventured together",
            "One member brings the group together",
            "Meet at a party",
            "Meet at school",
            "Mysterious Circumstance",
        ],
        travelPoints: [
            "Cave",
            "Forest",
            "Jungle",
            "Lake",
            "Meadow",
            "Mountains",
            "Oasis",
            "Ocean",
            "Plains",
            "Ruins",
            "Swamp",
            "Tomb",
            "Volcano"
        ],
        travelPointChoices: []

    }

    handleClick = () => {
        this.setState({
            showModal: !this.state.showModal,
        })
    }

    handleDropSelect = (keyEvent, event) => {
        const name = event.target.name
        const feedback = event.target.text
        this.setState({
            [event.target.name]: feedback
        })
        this.props.setWorldData(name, feedback)

        this.handleTravelPointState(feedback)
    }

    handleTravelPointState =(feedback) => {
        switch(feedback) {
            case "Aquatic":
                this.setState({
                    travelPointChoices: [],
                    travelPoints: [
                        "Cave",
                        "Lake",
                        "Mountains",
                        "Ocean",
                        "Ruins",
                        "Tomb",
                        "Volcano",
                    ]
                })
            break;
            case "Desert":
                this.setState({
                    travelPointChoices: [],
                    travelPoints: [
                        "Cave",
                        "Mountains",
                        "Oasis",
                        "Ruins",
                        "Tomb",
                    ]
                })
            break;
            case "Grassland":
                this.setState({
                    travelPointChoices: [],
                    travelPoints: [
                        "Cave",
                        "Forest",
                        "Lake",
                        "Meadow",
                        "Plains",
                        "Ruins",
                        "Swamp",
                        "Tomb",
                    ]
                })
            break;
            case "Savanna":
                this.setState({
                    travelPointChoices: [],
                    travelPoints: [
                        "Cave",
                        "Oasis",
                        "Ruins",
                        "Tomb",
                    ]
                })
            break;
            case "Taiga":
                this.setState({
                    travelPointChoices: [],
                    travelPoints: [
                        "Cave",
                        "Forest",
                        "Lake",
                        "Meadow",
                        "Mountains",
                        "Rivers",
                        "Ruins",
                        "Tomb",
                        "Volcano",
                    ]
                })
            break;
            case "Temperate Forest":
                this.setState({
                    travelPointChoices: [],
                    travelPoints: [
                        "Cave",
                        "Forest",
                        "Lake",
                        "Meadow",
                        "Mountains",
                        "Rivers",
                        "Ruins",
                        "Tomb",
                        "Volcano",
                    ]
                })
            break;
            case "Tropical Rainforest":
                this.setState({
                    travelPointChoices: [],
                    travelPoints: [
                        "Cave",
                        "Jungle",
                        "Rivers",
                        "Ruins",
                        "Swamp",
                        "Tomb",
                    ]
                })
            break;
            case "Tundra":
                this.setState({
                    travelPointChoices: [],
                    travelPoints: [
                        "Cave",
                        "Forest",
                        "Lake",
                        "Mountains",
                        "Ocean",
                        "Ruins",
                        "Tomb",
                    ]
                })
            break;
        }
    }

    handleRoll = (feedback, name) => {
        this.setState({
            [name]: feedback
        })
        this.props.setWorldData(name, feedback)
        this.handleTravelPointState(feedback)
    }

    handleAddEvent = (event) => {
        const currentChoices = this.state.travelPointChoices
        const updatedChoiceList = currentChoices.concat(event.target.value)
        const filteredChoiceList = updatedChoiceList.filter((item, index) => updatedChoiceList.indexOf(item) === index)
        
        if (this.state.travelPointChoices.length >= 3) {
            this.setState({
                eventCap: true
            })
        }

        this.setState({
            travelPointChoices: filteredChoiceList,
        })
        this.props.setWorldData("travelPointChoices", filteredChoiceList)
    }

    removeEvent = (event) => {
        let choices = this.state.travelPointChoices
        const newChoiceList = choices.filter(eventName => eventName !== event.target.value);

        if (this.state.travelPointChoices.length <= 5) {
            this.setState({
                eventCap: false
            })
        }

        this.setState({
            travelPointChoices: newChoiceList
        })
        this.props.setWorldData("travelPointChoices", newChoiceList)
    }



render() {  
    return (
        <div>
            <div className="btns">
                <Button variant="outline-success" size="lg" onClick={this.handleClick}>The Physical
                </Button>
            </div>
            <Modal size="lg" show={this.state.showModal} onHide={this.handleClick}>
                <Modal.Header closeButton>
                    <Modal.Title>Paint with all the colors.</Modal.Title>
                </Modal.Header>
                <Modal.Body className="d-flex flex-column align-items-center">
                    <p>Below are some buttons to help create your ideal world! The decisions you make now will help create a unique campaign down the line!</p>

                    <FormGroup>
                        <Form inline>
                            <Dropdown name="world" onSelect={this.handleDropSelect}>
                                <Dropdown.Toggle variant="outline-primary" name="world">
                                    {this.state.world ? `Setting: ${this.state.world}`: 'What is your setting?'}
                                </Dropdown.Toggle>
                                <Dropdown.Menu name="world">
                                    {this.state.worldOptions.map(item => {return <Dropdown.Item name="world">{item}</Dropdown.Item>})}
                                </Dropdown.Menu>
                            </Dropdown>
                            <RollBtn name="world" handleRoll={this.handleRoll} rollingArray={this.state.worldOptions}></RollBtn>
                        </Form>
                    </FormGroup>

                    <FormGroup>
                        <Form inline>
                            <Dropdown name="era" onSelect={this.handleDropSelect}>
                                <Dropdown.Toggle variant="outline-primary">
                                    {this.state.era ? `Era: ${this.state.era}`: 'What era does this adventure take place?'}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {this.state.eraOptions.map(item => {return <Dropdown.Item name="era">{item}</Dropdown.Item>})}
                                </Dropdown.Menu>
                            </Dropdown>
                            <RollBtn name="era" handleRoll={this.handleRoll} rollingArray={this.state.eraOptions}></RollBtn>
                        </Form>
                    </FormGroup>

                    <FormGroup>
                        <Form inline>
                            <Dropdown name="uniqueFeature" onSelect={this.handleDropSelect}>
                                <Dropdown.Toggle variant="outline-primary">
                                    {this.state.uniqueFeature ? `Feature: ${this.state.uniqueFeature}`: 'Does this world have a unique feature?'}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {this.state.featureOptions.map(item => {return <Dropdown.Item name="uniqueFeature">{item}</Dropdown.Item>})}
                                </Dropdown.Menu>
                            </Dropdown>
                            <RollBtn name="uniqueFeature" handleRoll={this.handleRoll} rollingArray={this.state.featureOptions}></RollBtn>
                        </Form>
                    </FormGroup>

                    <FormGroup>
                        <Form inline>
                            <Dropdown name="mapScale" onSelect={this.handleDropSelect}>
                                <Dropdown.Toggle variant="outline-primary">
                                    {this.state.mapScale ? `Size: ${this.state.mapScale}` : 'What kind of place are your adventurers starting?'}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {this.state.mapScaleOptions.map(item => {return <Dropdown.Item name="mapScale">{item}</Dropdown.Item>})}
                                </Dropdown.Menu>
                            </Dropdown>
                            <RollBtn name="mapScale" handleRoll={this.handleRoll} rollingArray={this.state.mapScaleOptions}></RollBtn>
                        </Form>
                    </FormGroup>

                    <FormGroup>
                        <Form inline>
                            <Dropdown name="charMeeting" onSelect={this.handleDropSelect}>
                                <Dropdown.Toggle variant="outline-primary">
                                    {this.state.charMeeting ? `Meeting: ${this.state.charMeeting}`: 'How do your characters know each other?'}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {this.state.meetingOptions.map(item => {return <Dropdown.Item name="charMeeting">{item}</Dropdown.Item>})}
                                </Dropdown.Menu>
                            </Dropdown>
                            <RollBtn name="charMeeting" handleRoll={this.handleRoll} rollingArray={this.state.meetingOptions}></RollBtn>
                        </Form>
                    </FormGroup>

                    <p>Consider some places your adventurers might travel through. Pick only 3.</p>

                    <div className="container">
                        <div className="side tags">
                        {this.state.travelPoints.map(drop => {
                            return <Button name="travelPointChoices" value={drop} className="eventbtns" onClick={this.handleAddEvent} disabled={this.state.travelPointChoices.length >= 3 ? true : false}> {drop}</Button>
                            })}
                        </div>
                        <div className="side tags">
                        {this.state.travelPointChoices.map(drop => {
                            return <Button name="travelPointChoices" value={drop} className="eventbtns" onClick={this.removeEvent}> {drop}</Button>
                            })}
                        </div>
                    </div>

                </Modal.Body>

                <Modal.Footer>
                    <Button variant="outline-success" onClick={this.handleClick} >Save</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
}

export default Physical;