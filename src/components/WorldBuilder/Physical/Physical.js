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
            "Coast",
            "Desert",
            "Forest",
            "Island",
            "Jungle",
            "Swamp",
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
            [event.target.name]: event.target.text
        })
        this.props.setWorldData(name, feedback)
    }

    handleRoll = (feedback, name) => {
        this.setState({
            [name]: feedback
        })
        this.props.setWorldData(name, feedback)
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