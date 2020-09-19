import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import {Button, Dropdown, Form, FormControl, FormGroup, OverlayTrigger, Tooltip} from 'react-bootstrap'
import "../style.css"

class Physical extends Component {

    state = {
        showModal: false,
        world: "",
        feature: "",
        era:"",
        mapScale: "",
        meeting: "",
    }

    handleClick = () => {
        this.setState({
            showModal: !this.state.showModal,
        })
    }

    handleWorldSelect = (keyEvent, event) => {
        this.setState({
            world: event.target.text
        }, () => this.props.setWorld(this.state.world) )
    }

    handleMapScaleSelect = (keyEvent, event) => {
        this.setState({
            mapScale: event.target.text
        }, () => this.props.setMapScale(this.state.mapScale))
    }

    handleMeetingSelect = (keyEvent, event) => {
        this.setState({
            meeting: event.target.text
        }, () => this.props.setCharMeeting(this.state.meeting))
    }

    handleEraSelect = (keyEvent, event) => {
        this.setState({
            era: event.target.text
        })
    }

    handleFeatureSelect = (keyEvent, event) => {
        this.setState({
            feature: event.target.text
        })
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
                <Modal.Body>
                    <p>Below are some buttons to help create your ideal world!</p>

                    <FormGroup>
                        <Dropdown onSelect={this.handleWorldSelect}>
                            <Dropdown.Toggle variant="outline-primary">
                                {this.state.world ? `Setting: ${this.state.world}`: 'What is your setting?'}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                            <Dropdown.Item >Coast</Dropdown.Item>
                            <Dropdown.Item >Desert</Dropdown.Item>
                            <Dropdown.Item >Forest</Dropdown.Item>
                            <Dropdown.Item >Island</Dropdown.Item>
                            <Dropdown.Item >Jungle</Dropdown.Item>
                            <Dropdown.Item >Swamp</Dropdown.Item>
                            <Dropdown.Item >Tundra</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </FormGroup>

                    <FormGroup>
                        <Dropdown onSelect={this.handleEraSelect}>
                            <Dropdown.Toggle variant="outline-primary">
                                {this.state.era ? `Era: ${this.state.era}`: 'What Era does this adventure take place?'}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                            <Dropdown.Item >Beowulf Adventure Trope (The age of heros magic is common)</Dropdown.Item>
                            <Dropdown.Item >Victorian Era (The time of romance magic is uncommon)</Dropdown.Item>
                            <Dropdown.Item >Present Day (Modern technology magic does not exist)</Dropdown.Item>
                            <Dropdown.Item >Steampunk Future (Technology & chivalry rule and magic is common)</Dropdown.Item>
                            <Dropdown.Item >Dystopian Post Appocolypse (Chaos magic is uncommon)</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </FormGroup>

                    <FormGroup>
                        <Dropdown onSelect={this.handleFeatureSelect}>
                            <Dropdown.Toggle variant="outline-primary">
                                {this.state.feature ? `Feature: ${this.state.feature}`: 'Does this world have a unique feature?'}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                            <Dropdown.Item >At the base of a dorment valcano</Dropdown.Item>
                            <Dropdown.Item >Extreme Weather</Dropdown.Item>
                            <Dropdown.Item >Architecutral building or Massive Statue</Dropdown.Item>
                            <Dropdown.Item >Many moons</Dropdown.Item>
                            <Dropdown.Item >Large Bodies of Water</Dropdown.Item>
                            <Dropdown.Item >Large Mountains</Dropdown.Item>
                            <Dropdown.Item >Local Ruins</Dropdown.Item>
                            <Dropdown.Item >Large Forest</Dropdown.Item>
                            <Dropdown.Item >Swamp or Delta</Dropdown.Item>
                            <Dropdown.Item >Religious Site</Dropdown.Item>
                            <Dropdown.Item >Deserted City</Dropdown.Item>
                            <Dropdown.Item >Canyon or Gorge</Dropdown.Item>
                            <Dropdown.Item >Northern Lights</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </FormGroup>

                    <FormGroup>
                        <Dropdown onSelect={this.handleMapScaleSelect}>
                            <Dropdown.Toggle variant="outline-primary">
                                {this.state.mapScale ? `Size: ${this.state.mapScale}` : 'What kind of place are your adventurers starting?'}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                            <Dropdown.Item >Village</Dropdown.Item>
                            <Dropdown.Item >Town</Dropdown.Item>
                            <Dropdown.Item >City</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </FormGroup>

                    <FormGroup>
                        <Dropdown onSelect={this.handleMeetingSelect}>
                            <Dropdown.Toggle variant="outline-primary">
                                {this.state.meeting ? `Meeting: ${this.state.meeting}`: 'How do your characters know each other?'}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                            <Dropdown.Item >Meet in a tavern about a contract</Dropdown.Item>
                            <Dropdown.Item >Party has already adventured together</Dropdown.Item>
                            <Dropdown.Item >One member brings the group together</Dropdown.Item>
                            <Dropdown.Item >Meet at a party</Dropdown.Item>
                            <Dropdown.Item >Meet at school</Dropdown.Item>
                            <Dropdown.Item >Mysterious Circumstance</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
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